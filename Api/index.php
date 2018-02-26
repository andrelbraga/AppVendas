<?php

if (isset($_SERVER['HTTP_ORIGIN'])) {
  header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
  //If required
  header('Access-Control-Allow-Credentials: true');
  header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS, DELETE");         
 
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
 
    exit(0);
}

require_once __DIR__.'/vendor/autoload.php';

require __DIR__.'/src/config/db.php';

$app = new Silex\Application();

/**
 * Finacing
 */
require __DIR__.'/src/controllers/financing.controller.php';
require __DIR__.'/src/models/financing.model.php';
require __DIR__.'/src/services/financing.service.php';

/**
 * Index
 */
require __DIR__.'/src/controllers/index.controller.php';



$app->run();