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
    $debug[] = "--- if frequency is MONTHLY ---";
    $debug[] = "last day of month is ". $now->endOfMonth()->format("l d");
    $debug[] = "found preferred day ". $this->schedule_day;

    if(strcasecmp($now->format("l"), $this->schedule_day) !== 0){
      $closest = $now->previous($this->schedule_day);
    }else{
      $closest = $now;
    }

    $debug[] = "closest to preferred day from end of month ". $closest->format("l d");
    $debug[] = "--- if frequency is BI-MONTHLY ---";
    $debug[] = "mid of month is ". $now->set("day", 15)->format("l d");

    if(strcasecmp($now->format("l"), $this->schedule_day) !== 0){
      $closest = $now->previous($this->schedule_day);
    }else{
      $closest = $now;
    }

    $debug[] = "closest to preferred day from mid of month ". $closest->format("l d");
    $debug[] = "------------------------------";
    $debug[] = "------------------------------";
    $debug[] = "------------------------------";
    $debug[] = "------------------------------";
    $debug[] = "------------------------------";

    if(strcasecmp($this->frequency,"bi-monthly") === 0){
      // 15th or 30th (depending on the last day of month)
    }else if(strcasecmp($this->frequency,"bi-monthly") === 0){
      // 30th (depending on the last day of month)
    }
      
    return $debug;
  }
}
