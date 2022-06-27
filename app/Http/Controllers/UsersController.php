<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
  public function login(Request $request){
    // return $request->all();
    $response = [
      "code" => 200,
      "message" => "login success!"
    ];

    $credentials = $request->validate([
      'email' => ['required','email'],
      'password' => ['required']
    ]);


    if(!Auth::attempt($credentials)){
      $response = [
        "code" => 400,
        "message" => "login failed."
      ];
    }

    return $response;
  }
  
  public function testForceLogin(Request $request, User $user)
  {
    Auth::login($user);
    return $user;
  }

  public function testSetPassword(Request $request, User $user, $password)
  {
    $user->password = Hash::make($password);
    $user->save();
    return [
      "code" => 200,
      "message" => "password changed for ".$user->email
    ];
  }

  public function testLogin(Request $request, User $user, $password)
  {
    $result = Hash::check($password, $user->password);
    $message = $result ? "correct" : "wrong";
    return [
      "code" => 200,
      "message" => $message
    ];
  }
}
