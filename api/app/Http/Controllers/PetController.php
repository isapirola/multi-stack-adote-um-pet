<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use Illuminate\Http\Request;

class PetController extends Controller
{
    /**
     * Returns the list of registered pets
     *
     * @return Collection
     */
    public function index()
    {
        return Pet::get();
    }
}
