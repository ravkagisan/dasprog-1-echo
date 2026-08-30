<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Perkenalan;

Route::get('/', [Perkenalan::class, 'index']);