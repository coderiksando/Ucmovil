<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Malla extends Model
{
  protected $fillable = [
      'id_malla', 'nombre_carrera', 'semestre',
  ];
  public function asignatura(){
    return $this->hasMany(Asignatura::class, 'id_malla', 'id_malla');
  }
}
