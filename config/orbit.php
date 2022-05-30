<?php
return [
  'default' => env('ORBIT_DEFAULT_DRIVER', 'json'),
  'paths' => [
    'content' => storage_path('orbit'),
    'cache' => storage_path('framework/cache/orbit'),
  ],
];
