<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class CarouselController extends Controller
{

    public function index()
    {
        $url = env('SUPABASE_URL') . '/storage/v1/object/list/' . env('SUPABASE_BUCKET');

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . env('SUPABASE_KEY'),
            'apikey' => env('SUPABASE_KEY'),
        ])->post($url, ['prefix' => 'Carousel/']);

        // CarouselController.php

        $files = $response->json();
        $baseUrl = env('SUPABASE_URL') . '/storage/v1/object/public/' . env('SUPABASE_BUCKET') . '/';

        $formattedFiles = collect($files)
            // 1. Filtre pour ne garder que les images
            ->filter(function ($file) {
                return str_ends_with(strtolower($file['name']), '.jpg')
                    || str_ends_with(strtolower($file['name']), '.png')
                    || str_ends_with(strtolower($file['name']), '.jpeg');
            })
            // 2. Réinitialisation des clés
            ->values()
            ->map(function ($file, $key) use ($baseUrl) {
                return [
                    'id' => $key,
                    'url' => $baseUrl . 'Carousel/' . $file['name'],
                    'alt' => "Œuvre de Rachelle Arts"
                ];
            });

        return response()->json($formattedFiles);
    }
}
