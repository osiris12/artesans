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
        return [
            'artesan_id' => $this->faker->numberBetween(1, 49),
            'address' => $this->faker->address,
            'zipcode' => $this->faker->postcode,
            'city_id' => $this->faker->numberBetween(1,10),
            'state_id' => $this->faker->numberBetween(1,10),
            'country_id' => 1,
            'latitude' => $this->faker->latitude,
            'longitude' => $this->faker->longitude,
            'notes' => $this->faker->realText,
        ];
    }
}
