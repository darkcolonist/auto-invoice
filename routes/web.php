<?php
use Illuminate\Http\Request;
use App\Http\Helpers\Util;
// use App\Http\Controllers\{InvoicesController};

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

Route::get('/test/invoice', [App\Http\Controllers\InvoicesController::class, 'index']);
Route::get('/test/invoice/all', [App\Http\Controllers\InvoicesController::class, 'all']);
Route::get('/test/invoice/purge', [App\Http\Controllers\InvoicesController::class, 'purge']);

Route::post('/getLeavesBySearchKeyword', 'LeavesController@getLeavesBySearchKeyword');