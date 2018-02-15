<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use src\Models\Financing;

$app->get('/financing', function() use ($app){
    $a = array('a'=>'1','b'=>'2');
    return $app->json($a);
});

$app->post('/financing', function(Request $request) use ($app){
    
    $data = json_decode(file_get_contents("php://input"));
    //$received = new Financing($data);
    $rtt = new Financing();
    print($rtt);
    
    return $app->json(['OK!']);
});




$app->error(function (Exception $e, Request $request, $code) use ($app) {
    if ($app['debug']) {
        return;
    }
    return new Response($e, $code);
});



//$app->run();

