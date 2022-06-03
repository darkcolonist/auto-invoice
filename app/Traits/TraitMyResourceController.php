<?php

namespace App\Traits;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
trait TraitMyResourceController
{
  public function validateIndex(Request $request){
    $validator = Validator::make($request->all(), [
      'limit' => 'numeric|min:5|max:50',
      'page' => 'numeric|gte:1',
    ]);

    return [
      "failed" => $validator->fails(),
      "errors" => $validator->errors()
    ];
  }

  public function getSortModel(Request $request){
    $sortModel = $request->input("sortModel", null);

    if($sortModel === null)
      return false;

    return json_decode($request->input("sortModel")[0],true);
  }
}