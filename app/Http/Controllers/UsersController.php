<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UsersController extends Controller
{
  public function testForceLogin(Request $request, User $user)
  {
    Auth::login($user);
    return $user;
  }
}
