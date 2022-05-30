<?php
namespace App\Models;

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Orbit\Concerns\Orbital;

class Invoice extends Model
{
  use Orbital;
  use \App\Traits\TraitUuid;
  protected $keyType = 'string';
  public $incrementing = false;
  use HasFactory;

  protected $attributes = [
    'status' => 'inactive',
    // 'schedule' => 
  ];

  public static function schema(Blueprint $table)
  {
    // $table->id(); // default incrementing 1,2,3...
    $table->uuid('id')->primary();
    $table->string('name');
    $table->string('status');
    $table->string('schedule_day');
    $table->string('schedule_hour');
    $table->string('schedule_minute');
    $table->string('frequency');
    // $table->timestamp('published_at')->nullable();
  }
}
