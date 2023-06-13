<?php

use App\Models\Locations\City;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cities', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('state_id')->constrained();
            $table->decimal('latitude', 10, 8);
            $table->decimal('longitude', 11, 8);
            $table->timestamps();
        });

        $cities = [
            ['name' => 'Mexico City', 'longitude' => -99.1332, 'latitude' => 19.4326, 'state_id' => 7],
            ['name' => 'Ecatepec', 'longitude' => -99.0501, 'latitude' => 19.6018, 'state_id' => 7],
            ['name' => 'Guadalajara', 'longitude' => -103.3496, 'latitude' => 20.6597, 'state_id' => 14],
            ['name' => 'Puebla', 'longitude' => -98.2063, 'latitude' => 19.0414, 'state_id' => 21],
            ['name' => 'Juarez', 'longitude' => -106.4245, 'latitude' => 31.6904, 'state_id' => 6],
            ['name' => 'Tijuana', 'longitude' => -117.0382, 'latitude' => 32.5149, 'state_id' => 2],
            ['name' => 'Leon', 'longitude' => -101.6943, 'latitude' => 21.1619, 'state_id' => 11],
            ['name' => 'Zapopan', 'longitude' => -103.3849, 'latitude' => 20.7235, 'state_id' => 14],
            ['name' => 'Monterrey', 'longitude' => -100.3161, 'latitude' => 25.6866, 'state_id' => 19],
            ['name' => 'Nezahualcoyotl', 'longitude' => -99.0334, 'latitude' => 19.4149, 'state_id' => 7],
            ['name' => 'Culiacan', 'longitude' => -107.3839, 'latitude' => 24.8050, 'state_id' => 25],
            ['name' => 'Chihuahua', 'longitude' => -106.0691, 'latitude' => 28.6329, 'state_id' => 6],
            ['name' => 'Naucalpan', 'longitude' => -99.2333, 'latitude' => 19.4834, 'state_id' => 7],
            ['name' => 'Merida', 'longitude' => -89.6169, 'latitude' => 20.9754, 'state_id' => 31],
            ['name' => 'San Luis Potosi', 'longitude' => -100.9856, 'latitude' => 22.1566, 'state_id' => 24],
            ['name' => 'Aguascalientes', 'longitude' => -102.2916, 'latitude' => 21.8853, 'state_id' => 1],
            ['name' => 'Hermosillo', 'longitude' => -110.9559, 'latitude' => 29.0721, 'state_id' => 26],
            ['name' => 'Saltillo', 'longitude' => -100.9737, 'latitude' => 25.4381, 'state_id' => 8],
            ['name' => 'Mexicali', 'longitude' => -115.4523, 'latitude' => 32.6245, 'state_id' => 2],
            ['name' => 'Guadalupe', 'longitude' => -100.2550, 'latitude' => 25.6763, 'state_id' => 19],
            ['name' => 'Acapulco', 'longitude' => -99.8237, 'latitude' => 16.8531, 'state_id' => 12],
            ['name' => 'Tlalnepantla', 'longitude' => -99.1950, 'latitude' => 19.5400, 'state_id' => 7],
            ['name' => 'Cancun', 'longitude' => -86.8515, 'latitude' => 21.1619, 'state_id' => 23],
            ['name' => 'Santiago de Queretaro', 'longitude' => -100.3870, 'latitude' => 20.5881, 'state_id' => 22],
            ['name' => 'Chimalhuacan', 'longitude' => -98.9594, 'latitude' => 19.4167, 'state_id' => 7],
            ['name' => 'Torreon', 'longitude' => -103.4068, 'latitude' => 25.5428, 'state_id' => 8],
            ['name' => 'Morelia', 'longitude' => -101.1949, 'latitude' => 19.7031, 'state_id' => 16],
            ['name' => 'Reynosa', 'longitude' => -98.2854, 'latitude' => 26.0939, 'state_id' => 28],
            ['name' => 'Tlaquepaque', 'longitude' => -103.3222, 'latitude' => 20.6417, 'state_id' => 14],
            ['name' => 'Tuxtla Gutierrez', 'longitude' => -93.1136, 'latitude' => 16.7535, 'state_id' => 5],
            ['name' => 'Victoria', 'longitude' => -99.1419, 'latitude' => 23.7369, 'state_id' => 28],
            ['name' => 'Toluca', 'longitude' => -99.6539, 'latitude' => 19.2928, 'state_id' => 7],
            ['name' => 'Ciudad Lopez Mateos', 'longitude' => -99.2643, 'latitude' => 19.5901, 'state_id' => 7],
            ['name' => 'Cuautitlan Izcalli', 'longitude' => -99.2461, 'latitude' => 19.6469, 'state_id' => 7],
            ['name' => 'Apodaca', 'longitude' => -100.3051, 'latitude' => 25.7886, 'state_id' => 19],
            ['name' => 'Heroica Matamoros', 'longitude' => -97.5048, 'latitude' => 25.8699, 'state_id' => 28],
            ['name' => 'General Escobedo', 'longitude' => -100.3312, 'latitude' => 25.8011, 'state_id' => 19],
            ['name' => 'Villahermosa', 'longitude' => -92.9303, 'latitude' => 17.9869, 'state_id' => 27],
            ['name' => 'Irapuato', 'longitude' => -101.3545, 'latitude' => 20.6787, 'state_id' => 11],
            ['name' => 'Xalapa', 'longitude' => -96.9102, 'latitude' => 19.5438, 'state_id' => 30],
            ['name' => 'Santa Catarina', 'longitude' => -100.4691, 'latitude' => 25.6820, 'state_id' => 19],
            ['name' => 'Uruapan', 'longitude' => -102.0518, 'latitude' => 19.4136, 'state_id' => 16],
            ['name' => 'Ciudad Victoria', 'longitude' => -99.1419, 'latitude' => 23.7369, 'state_id' => 28],
            ['name' => 'Ciudad Obregon', 'longitude' => -109.9388, 'latitude' => 27.4861, 'state_id' => 26],
            ['name' => 'Coatzacoalcos', 'longitude' => -94.4580, 'latitude' => 18.1345, 'state_id' => 30],
            ['name' => 'Playa del Carmen', 'longitude' => -87.0739, 'latitude' => 20.6296, 'state_id' => 23],
            ['name' => 'Mazatlan', 'longitude' => -106.4111, 'latitude' => 23.2494, 'state_id' => 25],
            ['name' => 'Colima', 'longitude' => -103.7247, 'latitude' => 19.2433, 'state_id' => 9],
            ['name' => 'Tepic', 'longitude' => -104.8945, 'latitude' => 21.5079, 'state_id' => 18],
            ['name' => 'Tampico', 'longitude' => -97.8535, 'latitude' => 22.2103, 'state_id' => 28],
        ];


        foreach ($cities as $city) {
            $new_city = new City();
            $new_city->name = $city['name'];
            $new_city->latitude = $city['latitude'];
            $new_city->longitude = $city['longitude'];
            $new_city->state_id = $city['state_id'];
            $new_city->save();
        }

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cities');
    }
};
