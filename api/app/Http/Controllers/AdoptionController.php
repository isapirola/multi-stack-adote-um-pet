<?php

namespace App\Http\Controllers;

use App\Models\Adoption;
use Illuminate\Http\Request;

class AdoptionController extends Controller
{   
    /**
     * Create an adoption registration
     *
     * @param Request $request
     * @return Adoption
     */
    public function store(Request $request)
    {
        $request->validate([
            "email" => ['required', 'email'],
            "value" => ['required', 'numeric', 'between:10,100'],
            "pet_id" =>['required', 'int', 'exists:pets,id']
        ]);

        $adoptionData = $request->all();

        return Adoption::create($adoptionData);
    }
}
