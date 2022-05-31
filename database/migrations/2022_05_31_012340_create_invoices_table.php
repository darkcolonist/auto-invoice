<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
  * Run the migrations.
  *
  * @return void
  */
  public function up()
  {
    Schema::create('invoices', function (Blueprint $table) {
      $table->uuid('id');
      $table->string('name');
      $table->string('status');
      $table->string('schedule_day');
      $table->string('schedule_hour');
      $table->string('schedule_minute');
      $table->string('frequency');
      $table->integer('invoice_no');
      $table->timestamps();
    });
  }
  
  /**
  * Reverse the migrations.
  *
  * @return void
  */
  public function down()
  {
    Schema::dropIfExists('invoices');
  }
};
