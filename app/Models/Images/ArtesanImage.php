<?php

namespace App\Models\Images;

use App\Models\Artesans\Artesan;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class ArtesanImage extends Model
{
    use HasFactory;

    public function artesan(): HasOne
    {
        return $this->hasOne(Artesan::class);
    }
}
