<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Job extends Model
{
    use HasFactory;

    protected $hidden = ['id','payload','queue'];

    public function getAvailableAtAttribute($value)
    {
        return Carbon::parse($value);
    }
}
