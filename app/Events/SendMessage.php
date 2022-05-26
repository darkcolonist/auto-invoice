<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class SendMessage implements ShouldBroadcast
{
  use Dispatchable, InteractsWithSockets, SerializesModels;
  
  var $data;
  var $channel;

  /**
  * Create a new event instance.
  *
  * @return void
  */
  public function __construct($data = array(), $channel = 'global-notifications')
  {
    $this->data = $data;
    $this->channel = $channel;
  }
  
  /**
  * Get the channels the event should broadcast on.
  *
  * @return \Illuminate\Broadcasting\Channel|array
  */
  public function broadcastOn()
  {
    return new Channel($this->channel);
  }
  
  public function broadcastAs()
  {
    return "UserEvent";
  }

  public function broadcastWith()
  {
    $title = "announcement from localhost";
    if(isset($this->data["title"])){
      $title = $this->data["title"];
    }
    return [
      'title' => $title,
      'data' => $this->data
    ];
  }
}
