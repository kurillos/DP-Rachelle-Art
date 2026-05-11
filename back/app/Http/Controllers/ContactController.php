<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        // 1. Validation rigoureuse
        $validator = Validator::make($request->all(), [
            'name'    => 'required|string|max:255',
            'email'   => 'required|email|max:255',
            'phone'   => [
                'nullable',
                'regex:/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/'
            ],
            'message' => 'required|string|min:10',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            // 2. Envoi du mail
            Mail::raw(
                "Nom: {$request->name}\nEmail: {$request->email}\nTéléphone: {$request->phone}\n\nMessage :\n{$request->message}",
                function ($message) use ($request) {
                    $message->to('rachelleartsvisuels@proton.me')
                        ->subject('Nouveau message de contact')
                        ->replyTo($request->email, $request->name);
                }
            );

            return response()->json([
                'status'  => 'success',
                'message' => 'Merci ' . $request->name . ', votre message a bien été envoyé !'
            ], 200);
        } catch (\Exception $e) {
            // En cas de problème technique avec le serveur de mail
            return response()->json([
                'status' => 'error',
                'message' => 'Désolé, une erreur technique empêche l\'envoi du mail.'
            ], 500);
        }
    }
}
