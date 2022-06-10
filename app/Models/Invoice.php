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

  public function getNextSchedule()
  {
    $debug = [];

    $tz = new CarbonTimeZone($this->timezone);
    // $now = Carbon::parse("now"); // default
    $now = Carbon::parse("june 16");
    $closest;
    
    $debug[] = "current time is ". $now->format("r");
    $debug[] = "applying timezone ". $this->timezone;
    $debug[] = "current time is ". $now->setTimezone($tz)->format("r");
    $debug[] = "------------------------------";
    $debug[] = "- if frequency is MONTHLY -";
    $debug[] = "------------------------------";

    $endOfMonth = (clone $now)->endOfMonth();

    $debug[] = "last day of month is ". $endOfMonth->format("l d");
    $debug[] = "found preferred day ". $this->schedule_day;

    $closest = clone $endOfMonth;
    if(strcasecmp($closest->format("l"), $this->schedule_day) !== 0){
      $closest = $closest->previous($this->schedule_day);
    }
    
    $fifteenth = (clone $now)->set("day", 15);
    $debug[] = "closest to preferred day from end of month ". $closest->format("l d");
    $debug[] = "------------------------------";
    $debug[] = "- if frequency is BI-MONTHLY -";
    $debug[] = "------------------------------";
    $debug[] = "mid of month is ". $fifteenth->format("l d");

    $closest = clone $now;
    if(strcasecmp($closest->format("l"), $this->schedule_day) !== 0){
      $closest = $closest->previous($this->schedule_day);
    }

    $debug[] = "closest to preferred day from mid of month ". $closest->format("l d");
    $debug[] = "------------------------------";
    $debug[] = "- actual use case -";
    $debug[] = "------------------------------";

    $debug[] = "given date now " . $now->format("r");

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

    if(strcasecmp($this->frequency,"bi-monthly") === 0){
      // 15th or 30th (depending on the last day of month)
    }else if(strcasecmp($this->frequency,"bi-monthly") === 0){
      // 30th (depending on the last day of month)
    }
      
    return $debug;
  }
}
