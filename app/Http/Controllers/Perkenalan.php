<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class Perkenalan extends Controller
{
    public function index()
    {
        // 1. Mulai menangkap output echo
        ob_start();

        echo "Mila Lestary<br>";
        echo "E41260277<br>";
        echo "Teknik Informatika<br>";
        echo "Karena saya ingin mengembangkan bakat dan minat saya dibidang IT.<br>";
        echo "Mencoba tapi gagal lebih baik daripada tidak pernah mencoba.<br>";

        // 2. Simpan hasil echo ke dalam variabel
        $outputEcho = ob_get_clean();

        // 3. Kirim ke halaman Home.tsx
        return Inertia::render('Home', [
            'message' => $outputEcho
        ]);
    }
}