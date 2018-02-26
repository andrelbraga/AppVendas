<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

$app->get('/financing/{name}', function ($name) use ($app) {
    return 'Hello '.$app->escape($name);
});

$app->post('/financing', function() use ($app) {
         
    try{
        $data = json_decode(file_get_contents("php://input"));
        FinancingService::SendMail($data);
        return $app->json("OK");

    } catch( Exception $e )
    {
        return new Response($e->getMessage(), 500);
    }
});