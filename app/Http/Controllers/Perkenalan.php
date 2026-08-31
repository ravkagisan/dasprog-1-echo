<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class Perkenalan extends Controller
{
    public function index()
    {
        ob_start();

        echo "Mochamad Ravi Ainur Rosida<br>";
        echo "E41261874<br>";
        echo "Teknik Informatika<br>";
        echo "Ingin menjadi programmer handal, namun enggan ngoding<br>";
        echo "Another day, another W.<br>";

        $outputEcho = ob_get_clean();

        return Inertia::render('Home', [
            'message' => $outputEcho,
        ]);
    }
}