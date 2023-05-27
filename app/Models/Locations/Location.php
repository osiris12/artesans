<?php

namespace App\Models\Locations;

use App\Models\Artesans\Contact;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Location extends Model
{
    use HasFactory;

    public function contacts(): HasMany
    {
        return $this->hasMany(Contact::class);
    }

    public function city(): HasOne
    {
        return $this->hasOne(City::class);
    }

    public function state(): HasOne
    {
        return $this->hasOne(State::class);
    }
}
