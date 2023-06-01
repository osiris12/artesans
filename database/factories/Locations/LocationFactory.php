<?php

namespace Database\Factories\Locations;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Locations\Location>
 */
class LocationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $coordinates = $this->generateRandomCoordinate();
        $randomLatitude = $coordinates[0];
        $randomLongitude = $coordinates[1];

        return [
            'artesan_id' => $this->faker->numberBetween(1, 49),
            'address' => $this->faker->address,
            'zipcode' => $this->faker->postcode,
            'city_id' => $this->faker->numberBetween(1, 10),
            'state_id' => $this->faker->numberBetween(1, 10),
            'country_id' => 1,
            'latitude' => $randomLatitude,
            'longitude' => $randomLongitude,
            'notes' => $this->faker->realText,
        ];
    }

    public function generateRandomCoordinate(): array
    {
        $minLat = 17.714403; // South
        $maxLat = 27.765895; // North
        $minLng = -105.016875; // West
        $maxLng = -97.701979; // East

        $randomLat = mt_rand($minLat * 1000000, $maxLat * 1000000) / 1000000;
        $randomLng = mt_rand($minLng * 1000000, $maxLng * 1000000) / 1000000;

        return [$randomLat, $randomLng];
    }
}
