<?php

namespace Database\Factories\Artesans;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ArtesanFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name,
            'languages' => json_encode([$this->faker->languageCode]),
            'city_id' => $this->faker->numberBetween(1, 50),
            'state_id' => $this->faker->numberBetween(1, 32),
            'main_image' => 'default',
            'custom_orders' => $this->faker->boolean,
        ];
    }
}
