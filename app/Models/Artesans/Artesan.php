<?php

namespace App\Models\Artesans;

use App\Models\Images\ArtesanImage;
use App\Models\Locations\Location;
use App\Models\Products\ProductListings;
use App\Models\Review;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Artesan extends Model
{
    use HasFactory;

    public function image(): HasOne
    {
        return $this->hasOne(ArtesanImage::class);
    }

    public function contacts(): HasMany
    {
        return $this->hasMany(Contact::class);
    }

    public function locations(): HasMany
    {
        return $this->hasMany(Location::class);
    }

    public function productListing(): HasOne
    {
        return $this->hasOne(ProductListings::class);
    }

    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class);
    }
}
