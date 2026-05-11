<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * Gère l'envoi du formulaire de contact.
     */
    public function store(Request $request)
    {
        // 1. Validation des données
        $validator = Validator::make($request->all(), [
            'name'    => 'required|string|max:255',
            'email'   => 'required|email|max:255',
            'phone'   => [
                'nullable',
                'regex:/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/'
            ],
            'message' => 'required|string|min:10',
        ], [
            'phone.regex' => 'Le format du numéro de téléphone est invalide.',
            'message.min' => 'Le message doit contenir au moins 10 caractères.',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ], 422);
        }

        // 2. Traitement (Optionnel : Envoi de mail ou Log)
        // \Log::info('Nouveau contact reçu', $request->all());

        // 3. Réponse de succès
        return response()->json([
            'status'  => 'success',
            'message' => 'Merci ' . $request->name . ', votre message a bien été transmis !'
        ], 200);
    }
}
