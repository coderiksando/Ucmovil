<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Boletine extends Model
{
    protected $fillable = [
        'id', 'asunto', 'contenido', 'propietario','estado'
    ];
}
