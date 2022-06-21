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

Route::get('/login', ["as"=>"login", "uses" => function(){
  // return response("login page go here")
  //   ->header("Content-type","text/plain");

  return redirect("/"); // let the front-end do its magic
}]);

Route::middleware(['auth'])->group(function () {
  Route::get('/secure', function(){
    return response("you are logged in")
      ->header("Content-type","text/plain");
  });
});

Route::resource('invoice', App\Http\Controllers\InvoicesController::class)
  ->parameters([
    "invoice" => "invoice:hash"
  ]);

// Route::get('/test/invoice', [App\Http\Controllers\InvoicesController::class, 'testFetchAll']);
// Route::get('/test/invoice/add', [App\Http\Controllers\InvoicesController::class, 'testAdd']);
// Route::get('/test/invoice/deleteAll', [App\Http\Controllers\InvoicesController::class, 'testDeleteAll']);

// Route::get('/test/invoice/schedule/{invoice:hash}', [App\Http\Controllers\InvoicesController::class, 'testSchedule']);
// Route::get('/test/invoice/schedulejob/{invoice:hash}', [App\Http\Controllers\InvoicesController::class, 'testScheduleSendInvoiceJob']);
// Route::get('/test/invoice/pdf/{invoice:hash}', [App\Http\Controllers\InvoicesController::class, 'testPdf']);

// Route::get('/test/invoice/email/{invoice:hash}', [App\Http\Controllers\InvoicesController::class, 'testEmail']);

Route::get('/test/user/login/{user:email}', [App\Http\Controllers\UsersController::class, 'testForceLogin']);

Route::get('/logout', function(){
  Auth::logout();
  return redirect("/");
});

Route::post('/getLeavesBySearchKeyword', 'LeavesController@getLeavesBySearchKeyword');