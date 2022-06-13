<?php
namespace App\Models;

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Carbon\Carbon;
use Carbon\CarbonTimeZone;

class Invoice extends Model
{
  use \App\Traits\TraitUniqueHash {
    \App\Traits\TraitUniqueHash::boot as traitUniqueHashBoot;
  }

  use \App\Traits\TraitTimestampsFormatting;
  use HasFactory;

  protected $attributes = [
    /**
     * if set to active for the first time, a next schedule will be
     * created.
     * 
     * if set to inactive, the upcoming schedule will be cancelled
     */
    'status' => 'inactive',

    /**
     * will find the closest day on or before the scheduled date. for 
     * example, the frequency is bi-monthly, meaning, the target
     * schedule days are on 15th and [28, 30, 31] depending on the
     * month. let's say the 15th day lands on a friday but the
     * schedule_day is wednesday, we will count 2 days before the
     * 15th, hence wednesday the 13th.
     */
    'schedule_day' => 'wednesday',

    /**
     * GMT0 time when the invoice will be sent
     */
    'schedule_time' => '13:00',

    /**
     * monthly = every 28th, 30th or 31st of the month, depending on
     * which month
     * 
     * bi-monthly = one on the 15th, another on the 28th, 30th or 31st 
     * of the month
     */
    'frequency' => 'bi-monthly',

    /**
     * will be padded with 5 zeroes in the invoice. will also
     * increment based on the name
     */
    'invoice_no' => 1,
  ];

  public static function boot(){
    parent::boot();
    self::traitUniqueHashBoot();

    $creationCallback = function ($model){
      try {
        $createdBy = \App\Models\User::where('email', 'webmaster@newmediastaff.com')
          ->firstOrFail();
        $model->created_by = $createdBy->id;
      } catch (\Throwable $th) {
        throw new \Error("WebmasterNotFoundException");
      }
    };
    
    static::creating($creationCallback);
  }

  public function getNextScheduleDates(Carbon $now, $frequency){
    $dates = [];

    $dates[0] = $now;

    // get closest to mid-month date with preferred day and time
    $midmonth = (clone $now)->set("day", 15);
    if(strcasecmp($midmonth->format("l"), $this->schedule_day) !== 0){
      $midmonth = $midmonth->previous($this->schedule_day);
    }
    $dates[15] = $midmonth;
    
    // get the closest to end-month date with preferred day and time
    $endOfMonth = (clone $now)->endOfMonth();
    if(strcasecmp($endOfMonth->format("l"), $this->schedule_day) !== 0){
      $endOfMonth = $endOfMonth->previous($this->schedule_day);
    }

    $dates[30] = $endOfMonth;

    if($dates[15]->gte($now) && strcasecmp($frequency, "bi-monthly") === 0)
      return $dates[15];
    else if($dates[30]->gte($now))
      return $dates[30];
    else
      // if 15th and 30th are earlier days than now then we need to 
      // move 1 week forward.
      return $this->getNextScheduleDates((clone $now)->addWeek());

    return $dates;
  }

  /**
   * if today is the 15th or the last day of the month then the
   * schedule may run today. base it as well to the preferred time
   * 
   * for example if preferred time is 5PM and the invoice was 
   * updated at around 9am today at june 15. the invoice is following
   * the bi-monthly frequency then the next schedule is june 15 5pm
   * which is later today.
   * 
   * but if the preferred time is 5PM and the invoice was updated at
   * around 5:10PM, the next schedule is last preferred day of june
   * at 5PM
   */
  public function getNextSchedule($dateNow = null)
  {
    $tz = new CarbonTimeZone($this->timezone);

    // convert to preferred timezone
    $now = Carbon::parse($dateNow)->setTimezone($tz);

    $date = $this->getNextScheduleDates($now, $this->frequency);

    // set the hour and minute
    $hourmin = explode(":", $this->schedule_time);
    $date->startOfDay();
    $date->hour($hourmin[0]);
    $date->minute($hourmin[1]);

    // convert to default app timezone
    $date->setTimezone(config("app.timezone"));

    // return $date->format("r e"); // for debug
    return $date;
  }
}
