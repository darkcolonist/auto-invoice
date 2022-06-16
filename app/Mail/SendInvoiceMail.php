<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\Invoice;

class SendInvoiceMail extends Mailable implements ShouldQueue
{
  use Queueable, SerializesModels;
  
  public $invoice;

  /**
  * Create a new message instance.
  *
  * @return void
  */
  public function __construct(Invoice $invoice)
  {
    $this->invoice = $invoice;
  }
  
  /**
  * Build the message.
  *
  * @return $this
  */
  public function build()
  {
    $data = [
      "recipientName" => "Recipient",
      "messageLines" => [
        "Attached to this email is my invoice.",
        "Please reply to this email if there are any concerns",
      ]
    ];
    
    $generatedPdf = $this->invoice->generatePDF();

    return $this->view('mail-template', $data)
      ->subject(env("APP_NAME")." - Invoice #".$this->invoice->getInvoiceNo())
      ->attach($generatedPdf["file"]);
  }
}
