<?php

namespace Database\Seeders;

use App\Models\Locations\Location;
use Illuminate\Database\Seeder;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Location::factory()
            ->count(10)
            ->create();
    }
}
