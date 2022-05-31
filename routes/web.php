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

Route::resource('invoice', App\Http\Controllers\InvoicesController::class)
  ->parameters([
    "invoice" => "invoice:hash"
  ]);

Route::get('/test/invoice', [App\Http\Controllers\InvoicesController::class, 'testFetchAll']);
Route::get('/test/invoice/add', [App\Http\Controllers\InvoicesController::class, 'testAdd']);
Route::get('/test/invoice/deleteAll', [App\Http\Controllers\InvoicesController::class, 'testDeleteAll']);

Route::post('/getLeavesBySearchKeyword', 'LeavesController@getLeavesBySearchKeyword');