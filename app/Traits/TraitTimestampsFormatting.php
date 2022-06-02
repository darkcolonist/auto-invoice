<?php

namespace App\Traits;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use \Carbon\Carbon;
trait TraitTimestampsFormatting
{
  // private $ourPreferredDateFormat = "Y-m-d H:i:s O";

  public function getCreatedAtAttribute($date){
    // return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('Y-m-d');
    // return Carbon::parse($date)->format($this->ourPreferredDateFormat);
    return $date;
  }
  
  public function getUpdatedAtAttribute($date){
    // return \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('Y-m-d');
    // return Carbon::parse($date)->format($this->ourPreferredDateFormat);
    return $date;
  }
}