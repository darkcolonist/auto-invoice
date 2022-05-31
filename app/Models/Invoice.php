<?php
namespace App\Models;

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
  use \App\Traits\TraitUniqueHash;
  // protected $keyType = 'string';
  // public $incrementing = false;
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
    'invoice_no' => 1
  ];
}
