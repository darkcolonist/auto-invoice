<?php

namespace App\Traits;

use Illuminate\Support\Str;


trait TraitUniqueHash
{
  /**
  * Override the boot function from Laravel so that 
  * we give the model a new UUID when we create it.
  */
  protected static function boot()
  {
    parent::boot();
    
    $creationCallback = function ($model) {
      $model->hash = Str::random(rand(8,16));
    };
    
    static::creating($creationCallback);
  }
}