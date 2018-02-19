<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

$app->get('financing', function() use ($app){
    $a = array('a'=>'1','b'=>'2');
    return $app->json($a);
});

$app->post('/financing', function(Request $request) use ($app){
    try { 
        
        $data = json_decode(file_get_contents("php://input"));
        return $app->json($data);        
        //return $app->json(FinancingService::SendMail($data));

    }
    catch (Exception $e) {
        return new Response($e, 500);
    }

});




$app->error(function (Exception $e, Request $request, $code) use ($app) {
    if ($app['debug']) {
        return;
    }
    return new Response($e, $code);
});



//$app->run();

