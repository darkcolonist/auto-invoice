<?php
use Illuminate\Http\Request;
use App\Http\Helpers\Util;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function(){
  return view("react");
});

Route::get('/status', function(){
  return [
    "loggedIn" => Auth::check(),
    "email" => Auth::check() ? Auth::user()->email : false,
  ];
});

Route::get('/login', ["as"=>"login", "uses" => function(){
  // return response("login page go here")
  //   ->header("Content-type","text/plain");

  return redirect("/"); // let the front-end do its magic
}]);

Route::post('login', [App\Http\Controllers\UsersController::class, 'login']);

Route::middleware(['auth'])->group(function () {
  Route::get('/secure', function(){
    return response("you are logged in")
      ->header("Content-type","text/plain");
  });
  
  Route::resource('invoice', App\Http\Controllers\InvoicesController::class)
    ->parameters([
      "invoice" => "invoice:hash"
    ]);
});


Route::prefix('test')
  ->middleware(['test.only'])
  ->group(function(){
    /**
     * WARNING
     * some of these routes do major changes to the database like 
     * bulk delete, flushing and the like. whenever you engage test
     * mode, ensure that you know what you are doing!
     */
    Route::get('invoice', [App\Http\Controllers\InvoicesController::class, 'testFetchAll']);
    Route::get('invoice/add', [App\Http\Controllers\InvoicesController::class, 'testAdd']);
    Route::get('invoice/deleteAll', [App\Http\Controllers\InvoicesController::class, 'testDeleteAll']);
    Route::get('invoice/schedule/{invoice:hash}', [App\Http\Controllers\InvoicesController::class, 'testSchedule']);
    Route::get('invoice/schedulejob/{invoice:hash}', [App\Http\Controllers\InvoicesController::class, 'testScheduleSendInvoiceJob']);
    Route::get('invoice/pdf/{invoice:hash}', [App\Http\Controllers\InvoicesController::class, 'testPdf']);    
    Route::get('invoice/email/{invoice:hash}', [App\Http\Controllers\InvoicesController::class, 'testEmail']);
    
    Route::get('user/forcelogin/{user:email}', [App\Http\Controllers\UsersController::class, 'testForceLogin']);
    Route::get('user/password/{user:email}/{password}', [App\Http\Controllers\UsersController::class, 'testSetPassword']);
    Route::get('user/login/{user:email}/{password}', [App\Http\Controllers\UsersController::class, 'testLogin']);
    
    Route::get('hello', function(){
      return response("you are in test mode")
        ->header("content-type", "text/plain");
    });
  });

Route::get('/logout', function(){
  Auth::logout();
  return redirect("/");
});