<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


$app->get('/cars', function() use ($app){
    $a = array('a'=>'1','b'=>'2');
    return $app->json($a);
});

$app->post('/cars', function(Request $request) use ($app){
    $data = json_decode(file_get_contents("php://input"));
    return $app->json($data);
});




$app->error(function (Exception $e, Request $request, $code) use ($app) {
    if ($app['debug']) {
        return;
    }
    return new Response($e, $code);
});



//$app->run();

