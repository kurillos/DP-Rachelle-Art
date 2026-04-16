<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CarouselController;
// contrôleurs
// use App\Http\Controllers\ContactController; 

/*
|--------------------------------------------------------------------------
| Routes Publiques
|--------------------------------------------------------------------------
*/

// Carousel
Route::get('/carousel', [CarouselController::class, 'index']);

// ormulaire de contact
// Route::post('/contact', [ContactController::class, 'send']);
