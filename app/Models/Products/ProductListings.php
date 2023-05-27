<?php

namespace App\Models\Products;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ProductListings extends Model
{
    use HasFactory;

    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }
}
