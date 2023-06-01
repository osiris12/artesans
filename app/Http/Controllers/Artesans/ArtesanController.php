<?php

namespace App\Http\Controllers\Artesans;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreArtesanRequest;
use App\Http\Requests\UpdateArtesanRequest;
use App\Models\Artesans\Artesan;
use Inertia\Inertia;

class ArtesanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreArtesanRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Artesan $artesan)
    {
        return Inertia::render('Artesans/ArtesanProfile', [
            'artesan' => $artesan,
            'locations' => $artesan->locations,

        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Artesan $artesan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateArtesanRequest $request, Artesan $artesan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Artesan $artesan)
    {
        //
    }
}
