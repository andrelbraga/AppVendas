<?php

/**
 * @param $_SERVER['REQUEST_URI']
 * @param $_SERVER['REQUEST_METHOD']
 */

$method = $_SERVER['REQUEST_METHOD'];
var_dump($method);
switch($method){

    case 'GET':
      echo 'Index';
    break;
    case 'POST':
    break;
    default:
    break;

}
