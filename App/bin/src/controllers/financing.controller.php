<?php

/**
 * @param $_SERVER['REQUEST_URI']
 * @param $_SERVER['REQUEST_METHOD']
 */

$method = $_SERVER['REQUEST_METHOD'];
var_dump($method);
switch($method){

    case 'GET':
    break;
    case 'POST':
    try { 
        $data = json_decode(file_get_contents("php://input"));
        var_dump($data);        
        return FinancingService::SendMail($data);

    }
    catch (Exception $e) {
        return json_encode($e->getMessage());
    }
    
    default:
    break;

}