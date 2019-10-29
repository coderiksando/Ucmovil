<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HorariosAtencione extends Model
{
  protected $fillable = [
      'id_rut', 'tipo', 'dia',
      'modulo',
  ];
}
