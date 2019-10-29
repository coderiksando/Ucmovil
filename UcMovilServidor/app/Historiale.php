<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Historiale extends Model
{

  protected $fillable = [
      'id_asignatura', 'id_alumno', 'estado',
      'semestre', 'nota_final',
  ];
  public function asignatura(){
    return $this->belongsTo(Asignatura::class, 'id_asignatura', 'id_asignatura');
  }
  public function alumno(){
    return $this->belongsTo(Alumno::class, 'id_alumno', 'id_alumno');
  }
}
