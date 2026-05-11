<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CarouselController;
// contrôleurs
use App\Http\Controllers\ContactController;

/*
|--------------------------------------------------------------------------
| Routes Publiques
|--------------------------------------------------------------------------
*/

// Carousel
Route::get('/carousel', [CarouselController::class, 'index']);

Route::fallback(function () {
    return view('welcome');
});
