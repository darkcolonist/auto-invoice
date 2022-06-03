<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class InvoicesController extends Controller
{
  use \App\Traits\TraitMyResourceController;

  private $hiddenAttributes = ["id", "created_by"];

  private function prepareModelForDisplay($model){
    $model->makeHidden($this->hiddenAttributes);

    return $model;
  }

  /**
  * Display a listing of the resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function index(Request $request)
  {
    $validation = $this->validateIndex($request);
    if($validation["failed"])
      return response([
        "code" => 400,
        "message" => $validation["errors"]
      ]);

    // sleep(1); // for loader testing


    $limit = $request->input("limit", 3);
    $offset = ($request->input("page", 1)-1)*$limit;

    $invoices = Invoice::limit($limit)
      ->offset($offset);

    if($this->getSortModel($request)){
      $sortModel = $this->getSortModel($request);

      if($sortModel["sort"] == "asc")
        $invoices->orderBy($sortModel["field"]);
      else
        $invoices->orderByDesc($sortModel["field"]);

    }

    $invoices = $this->prepareModelForDisplay($invoices->get());
    
    $totalRows = Invoice::count();

    return response([
      "code" => 200,
      "data" => $invoices,
      "totalRows" => $totalRows
    ]);
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
    $invoice = new Invoice;
    $invoice->name = $request->input('name');
    $invoice->schedule_time = $request->input('schedule_time');
    $invoice->status = $request->input('status');
    $invoice->frequency = $request->input('frequency');
    $invoice->save();

    return response([
      "code" => 200,
      "data" => $this->prepareModelForDisplay($invoice)
    ]);
  }
  
  /**
  * Display the specified resource.
  *
  * @param  \App\Models\Invoice  $invoice
  * @return \Illuminate\Http\Response
  */
  public function show(Invoice $invoice)
  {
    return response([
      "code" => 200,
      "data" => $this->prepareModelForDisplay($invoice)
    ]);
  }
  
  /**
  * Show the form for editing the specified resource.
  *
  * @param  \App\Models\Invoice  $invoice
  * @return \Illuminate\Http\Response
  */
  public function edit(Invoice $invoice)
  {
    //
  }
  
  /**
  * Update the specified resource in storage.
  *
  * @param  \Illuminate\Http\Request  $request
  * @param  \App\Models\Invoice  $invoice
  * @return \Illuminate\Http\Response
  */
  public function update(Request $request, Invoice $invoice)
  {
    $invoice->name = $request->input('name');
    $invoice->schedule_time = $request->input('schedule_time');
    $invoice->status = $request->input('status');
    $invoice->frequency = $request->input('frequency');
    $invoice->save();

    return response([
      "code" => 200,
      "data" => $this->prepareModelForDisplay($invoice)
    ]);
  }
  
  /**
  * Remove the specified resource from storage.
  *
  * @param  \App\Models\Invoice  $invoice
  * @return \Illuminate\Http\Response
  */
  public function destroy(Invoice $invoice)
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
