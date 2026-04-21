<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {

        // 1. On autorise le CORS pour les requêtes venant de React
        // Laravel 11/12 gère cela via le middleware HandleCors par défaut

        // 2. CSRF pour les routes API
        $middleware->validateCsrfTokens(except: [
            'carousel',
            'api/*', // outes API pour plus tard
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
