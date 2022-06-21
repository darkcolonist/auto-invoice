<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class TestModeOnly
{
  /**
  * Handle an incoming request.
  *
  * @param  \Illuminate\Http\Request  $request
  * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
  * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
  */
  public function handle(Request $request, Closure $next)
  {
    if(env("APP_ENV") == "local" && env("APP_DEBUG") == true)
      return $next($request);
    else {
      return response("test mode is disabled")
        ->header("content-type","text/plain");
    }
  }
}
