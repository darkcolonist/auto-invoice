<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\Invoice;
use Carbon\Carbon;

class SendInvoiceMail extends Mailable implements ShouldQueue
{
  use Queueable, SerializesModels;
  
  public $invoice;
  public $testMode;

  /**
  * Create a new message instance.
  *
  * @return void
  */
  public function __construct(Invoice $invoice, $testMode = false)
  {
    $this->invoice = $invoice;
    $this->testMode = $testMode;
  }
  
  /**
  * Build the message.
  *
  * @return $this
  */
  public function build()
  {
    $generatedPdf = $this->invoice->generatePDF();

    $theView = $this->view('mail-template', self::prepareViewData($this->invoice))
      ->subject(env("APP_NAME")." - ".$this->invoice->name." - Invoice #".$this->invoice->getInvoiceNo());

    if(!$this->testMode){
      $theView->attach($generatedPdf["file"]);
    }

    return $theView;
  }

  static function prepareViewData(Invoice $invoice){
    return $data = [
      "recipientName" => "Recipient",
      "messageLines" => [
        "Attached to this email is my invoice for ".$invoice->getRange(Carbon::parse("now")).".",
        "Please email to me directly if are any concerns, don't reply to this email.",
      ]
    ];
  }

  static function getTemplate(Invoice $invoice){
    return view('mail-template', self::prepareViewData($invoice));
  }
}
