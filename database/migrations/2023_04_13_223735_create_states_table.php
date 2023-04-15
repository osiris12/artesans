<?php

use App\Models\Locations\State;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('states', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->char('abbreviation', 4);
            $table->foreignId('country_id')->constrained();
            $table->timestamps();
        });

        $states = [
            ["name" => "Aguascalientes", "abbreviation" => "AGU"],
            ["name" => "Baja California", "abbreviation" => "BCN"],
            ["name" => "Baja California Sur", "abbreviation" => "BCS"],
            ["name" => "Campeche", "abbreviation" => "CAM"],
            ["name" => "Chiapas", "abbreviation" => "CHP"],
            ["name" => "Chihuahua", "abbreviation" => "CHH"],
            ["name" => "Mexico City", "abbreviation" => "CMX"],
            ["name" => "Coahuila", "abbreviation" => "COA"],
            ["name" => "Colima", "abbreviation" => "COL"],
            ["name" => "Durango", "abbreviation" => "DUR"],
            ["name" => "Guanajuato", "abbreviation" => "GUA"],
            ["name" => "Guerrero", "abbreviation" => "GRO"],
            ["name" => "Hidalgo", "abbreviation" => "HID"],
            ["name" => "Jalisco", "abbreviation" => "JAL"],
            ["name" => "México", "abbreviation" => "MEX"],
            ["name" => "Michoacán", "abbreviation" => "MIC"],
            ["name" => "Morelos", "abbreviation" => "MOR"],
            ["name" => "Nayarit", "abbreviation" => "NAY"],
            ["name" => "Nuevo León", "abbreviation" => "NLE"],
            ["name" => "Oaxaca", "abbreviation" => "OAX"],
            ["name" => "Puebla", "abbreviation" => "PUE"],
            ["name" => "Querétaro", "abbreviation" => "QUE"],
            ["name" => "Quintana Roo", "abbreviation" => "ROO"],
            ["name" => "San Luis Potosí", "abbreviation" => "SLP"],
            ["name" => "Sinaloa", "abbreviation" => "SIN"],
            ["name" => "Sonora", "abbreviation" => "SON"],
            ["name" => "Tabasco", "abbreviation" => "TAB"],
            ["name" => "Tamaulipas", "abbreviation" => "TAM"],
            ["name" => "Tlaxcala", "abbreviation" => "TLA"],
            ["name" => "Veracruz", "abbreviation" => "VER"],
            ["name" => "Yucatán", "abbreviation" => "YUC"],
            ["name" => "Zacatecas", "abbreviation" => "ZAC"]
        ];

        foreach ($states as $state){
            $new_state = new State(); //The Category is the model for your migration
            $new_state->name = $state['name'];
            $new_state->abbreviation = $state['abbreviation'];
            $new_state->country_id = 1;
            $new_state->save();
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('states');
    }
};
