<?php

namespace App\Models\Locations;

use App\Models\Artesans\Contact;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Location extends Model
{
    use HasFactory;

    public function contacts(): HasMany
    {
        return $this->hasMany(Contact::class);
    }
}
