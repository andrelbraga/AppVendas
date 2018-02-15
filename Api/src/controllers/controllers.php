<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

// use Silex\Application;
// $app = new Application();


$app->get('/', function() use ($app){
    $a = array('a'=>'1','b'=>'2');
    return $app->json($a);
});

$app->match("/", function() use ($app) { 
    $b = array('a'=>'1','b'=>'2', 'c'=>'3');
    return $app->json($b); 

})->method("OPTIONS");




$app->error(function (\Exception $e, Request $request, $code) use ($app) {
    if ($app['debug']) {
        return;
    }
    return new Response($e, $code);
});



//$app->run();

