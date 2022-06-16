<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use \Barryvdh\Debugbar\Facades\Debugbar;

class InvoicesController extends Controller
{
  use \App\Traits\TraitMyResourceController;
  
  private $hiddenAttributes = ["id", "created_by", "current_job", "job.id"];
  
  private function prepareModelForDisplay($model){
    $model->makeHidden($this->hiddenAttributes);
    
    // eager load the job
    // $model->load("job")->makeHidden(["id"]);
    // $model->job->makeHidden(["id"]);
    
    // Debugbar::info('going once');
    // Debugbar::info($model->toArray());
    
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
    
    $invoices = Invoice::with(["job"]);
    
    if($this->getSortModel($request)){
      $sortModel = $this->getSortModel($request);
      
      if($sortModel["sort"] == "asc")
      $invoices->orderBy($sortModel["field"]);
      else
      $invoices->orderByDesc($sortModel["field"]);
    }
    
    if($this->getSearchKeyword($request)){
      $searchKeyword = $this->getSearchKeyword($request);
      
      $invoices->where("name","like","%".$searchKeyword."%");
    }
    
    // $sql = $invoices->toSql();
    
    $totalRows = $invoices->count();
    $invoices->limit($limit)
    ->offset($offset);
    
    $invoices = $this->prepareModelForDisplay($invoices->get());
    
    return response([
      "code" => 200,
      "data" => $invoices,
      "totalRows" => $totalRows,
      // "debug" => $sql
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
  
  private function generateInvoiceFromRequest(Request $request, $invoice = null){
    if($invoice == null)
    $invoice = new Invoice;
    
    $invoice->name = $request->input('name');
    $invoice->schedule_time = $request->input('schedule_time');
    $invoice->schedule_day = $request->input('schedule_day');
    $invoice->status = $request->input('status');
    $invoice->frequency = $request->input('frequency');
    $invoice->contact_details = $request->input('contact_details');
    $invoice->bill_to_details = $request->input('bill_to_details');
    $invoice->account_details = $request->input('account_details');
    $invoice->invoice_lines = $request->input('invoice_lines');
    
    return $invoice;
  }
  
  /**
  * Store a newly created resource in storage.
  *
  * @param  \Illuminate\Http\Request  $request
  * @return \Illuminate\Http\Response
  */
  public function store(Request $request)
  {
    $invoice = $this->generateInvoiceFromRequest($request);
    
    try {
      $invoice->save();
    } catch (\Throwable $th) {
      if($th->getMessage() === "WebmasterNotFoundException");
      return response([
        "code" => 500,
        "message" => "webmaster@newmediastaff.com user not found in records."
      ]);
    }
    
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
    $invoice = $this->generateInvoiceFromRequest($request, $invoice);
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
    $name = $invoice->name;
    $hash = $invoice->hash;
    $invoice->delete();
    
    return response([
      "code" => 200,
      "data" => [
        "name" => $name,
        "hash" => $hash,
        ]
      ]);
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
    
    public function testSchedule(Request $request, Invoice $invoice){
      $invoice = $this->prepareModelForDisplay($invoice);
      
      return [
        "code" => 200,
        "invoice" => $invoice,
        "input" => $request->input("date"),
        "next_schedule" => $invoice->getNextSchedule($request->input("date"))
      ];
    }
    
    public function testScheduleSendInvoiceJob(Request $request, Invoice $invoice){
      $invoice = $this->prepareModelForDisplay($invoice);
      $schedule = $invoice->getNextSchedule();
      $jobID = $invoice->scheduleNextAutoInvoice();
      $invoice->job;
      Log::channel("mydebug")->info($invoice->hash . " is scheduled [{$jobID}] on ". $schedule);
      
      return [
        "code" => 200,
        "invoice" => $invoice,
        "next_schedule" => $schedule
      ];
    }
    
    public function testPdf(Request $request, Invoice $invoice){
      $generatedPdf = $invoice->generatePDF($request->input("date"));
      return $generatedPdf["view"];
    }
    
    public function testEmail(Request $request, Invoice $invoice){
      $to = config("app.email_to");
      // $generatedPdf = $invoice->generatePDF();
      // $data = [
      //   "recipientName" => "Recipient",
      //   "messageLines" => [
      //     "Attached to this email is my invoice.",
      //     "Please reply to this email if there are any concerns",
      //   ]
      // ];

      // \Mail::send('mail-template', $data, function($message) use($to, $generatedPdf) {
      //   $message->to($to, 'Someone')->subject('Autoinvoice Mailer');
      //   $message->attach($generatedPdf["file"]);
      //   // $message->from('someone@gmail.com','The Great Anon');
      // });

      \Mail::to($to, 'Someone')
        ->send(new \App\Mail\SendInvoiceMail($invoice));
      
      return [
        "code" => 200,
        "to" => $to,
        "message" => "Basic Email Sent. Check your inbox."
      ];
    }
  }
  