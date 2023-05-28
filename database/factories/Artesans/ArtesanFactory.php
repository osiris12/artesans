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
            'main_image' => 'default',
            'origins' => 'Mexico',
            'custom_orders' => $this->faker->boolean,
        ];
    }
}
