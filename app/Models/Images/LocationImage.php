<?php

namespace App\Models\Images;

use App\Models\Locations\Location;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class LocationImage extends Model
{
    use HasFactory;

    public function location(): HasOne
    {
        return $this->hasOne(Location::class);
    }
}
