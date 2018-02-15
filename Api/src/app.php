<?php

use Silex\Application;
use Silex\Provider\AssetServiceProvider;
use Silex\Provider\ServiceControllerServiceProvider;
use Silex\Provider\HttpFragmentServiceProvider;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


$app = new Application();
$app->register(new ServiceControllerServiceProvider());
$app->register(new AssetServiceProvider());
$app->register(new HttpFragmentServiceProvider());


$app['debug'] = true;

return $app;
