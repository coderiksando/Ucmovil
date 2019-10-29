<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Solicitude extends Model
{
    protected $fillable = [
        'id','id_solicitante', 'tipo', 'solicitud', 'estado', 'texto'
    ];
}
