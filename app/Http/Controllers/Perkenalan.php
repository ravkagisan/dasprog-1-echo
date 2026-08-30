<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class Perkenalan extends Controller
{
    public function index()
    {
        ob_start();

        echo "Mila Lestary<br>";
        echo "E41260277<br>";
        echo "Teknik Informatika<br>";
        echo "Alasan saya masuk di jurusan ini, karena saya ingin mengembangkan bakat dan minat saya dibidang IT.<br>";
        echo "Mencoba tapi gagal lebih baik daripada tidak pernah mencoba.<br>";

        $outputEcho = ob_get_clean();

        return Inertia::render('Home', [
            'message' => $outputEcho
        ]);
    }
}