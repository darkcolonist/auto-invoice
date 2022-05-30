<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InvoicesController extends Controller
{
  public function index(Type $var = null)
  {
    $invoice = new \App\Models\Invoice;
    $invoice->name = "example 1";
    $invoice->status = "inactive";
    $invoice->save();
    // try {
      
    //   // $invoice = \App\Models\Invoice::create([
    //   //   "name" => "example4",
    //   //   "status" => "inactive"
    //   // ]);
    // } catch (\Throwable $th) {
    //   return response($th)->header("content-type","text/plain");
    // }
    
    return [
      "code" => 200,
      "message" => "added",
      "invoice" => $invoice
    ];
  }

  public function all(){
    $found = \App\Models\Invoice::all();
    return [
      "code" => 200,
      "data" => $found
    ];
  }

  public function purge(){
    $purged = \App\Models\Invoice::all()->count();
    \App\Models\Invoice::where('id', 'like', '%%')->delete();
    // \DB::table("invoices")->delete();
    return [
      "code" => 200,
      "message" => "purged",
      "count" => $purged
    ];
  }
}
