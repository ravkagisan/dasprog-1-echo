<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'user' => 'Ravi',
        'message' => 'Selamat datang di stack Laravel + Inertia + TypeScript!'
    ]);
});