<?php

namespace Database\Seeders;

use App\Models\Artesans\Artesan;
use Illuminate\Database\Seeder;

class ArtesanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Artesan::factory()
            ->count(50)
            ->create();
    }
}
