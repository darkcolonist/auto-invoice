<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InvoicesController extends Controller
{
  /**
  * Display a listing of the resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function index()
  {
    //
  }
  
  /**
  * Show the form for creating a new resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function create()
  {
    //
  }
  
  /**
  * Store a newly created resource in storage.
  *
  * @param  \Illuminate\Http\Request  $request
  * @return \Illuminate\Http\Response
  */
  public function store(Request $request)
  {
    //
  }
  
  /**
  * Display the specified resource.
  *
  * @param  int  $id
  * @return \Illuminate\Http\Response
  */
  public function show($id)
  {
    //
  }
  
  /**
  * Show the form for editing the specified resource.
  *
  * @param  int  $id
  * @return \Illuminate\Http\Response
  */
  public function edit($id)
  {
    //
  }
  
  /**
  * Update the specified resource in storage.
  *
  * @param  \Illuminate\Http\Request  $request
  * @param  int  $id
  * @return \Illuminate\Http\Response
  */
  public function update(Request $request, $id)
  {
    //
  }
  
  /**
  * Remove the specified resource from storage.
  *
  * @param  int  $id
  * @return \Illuminate\Http\Response
  */
  public function destroy($id)
  {
    //
  }

  public function testAdd(Type $var = null)
  {
    $user = \App\Models\User::where('email', 'webmaster@newmediastaff.com')
      ->firstOrFail();

    $invoice = new \App\Models\Invoice;
    $invoice->name = "example ".(\App\Models\Invoice::all()->count()+1);
    $invoice->status = "inactive";
    $invoice->created_by = $user->id;
    $invoice->save();
    
    return [
      "code" => 200,
      "message" => "added",
      "invoice" => $invoice
    ];
  }

  public function testFetchAll(){
    $found = \App\Models\Invoice::all();
    return [
      "code" => 200,
      "data" => $found
    ];
  }

  public function testDeleteAll(){
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
