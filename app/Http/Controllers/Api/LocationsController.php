<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Locations\Location;
use Illuminate\Http\Request;

class LocationsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $locations = Location::all();
        $formattedLocations = $locations->map(function ($location) {
            $lat = $location->latitude;
            $lng = $location->longitude;

            return [
                'properties' => [
                    'name' => 'name',
                ],
                'geometry' => [
                    'coordinates' => [$lng, $lat],
                    'type' => 'Point',
                ],
                'type' => 'Feature',
            ];
        });

        return ['type' => 'FeatureCollection', 'features' => $formattedLocations];
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
