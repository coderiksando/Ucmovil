<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Alumno extends Model
{
  protected $fillable = [
      'id', 'ano_ingreso', 'nombre',
      'email', 'ano_nacimiento', 'telefono',
      'direccion', 'semestre_actual', 'id_alumno',
  ];

  public function user(){
    return $this->belongTo(User::class, 'id', 'id');
  }
  public function historiale(){
    return $this->hasMany(Historiale::class, 'id', 'id_alumno');
  }
  public function ramosactuale(){
    return $this->hasMany(RamosActuales::class, 'id', 'id_alumno');
  }
}
