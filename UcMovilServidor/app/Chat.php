<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    protected $fillable = [
        'id_remitente',
        'id_destinatario',
        'texto',
        'nombre',
        'tipo_remitente'
    ];
}
