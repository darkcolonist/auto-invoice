<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

use App\Models\Invoice;
use Illuminate\Support\Facades\Log;

class SendInvoice implements ShouldQueue, ShouldBeUnique
{
  use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
  
  protected $invoice;
  
    /**
   * The number of seconds after which the job's unique lock will be released.
   *
   * @var int
   */
  public $uniqueFor = 3600;

  /**
  * Create a new job instance.
  *
  * @return void
  */
  public function __construct(Invoice $invoice)
  {
    $this->invoice = $invoice;
    $this->onQueue('send-invoices-queue');
  }

  public function uniqueId(){
    return $this->invoice->hash;
  }
  
  /**
  * Execute the job.
  *
  * @return void
  */
  public function handle()
  {
    Log::channel("mydebug")->info($this->invoice->hash." processed!");
    $this->invoice->scheduleNextAutoInvoice();
  }
}
