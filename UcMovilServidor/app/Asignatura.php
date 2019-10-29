<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Asignatura extends Model
{
  protected $primaryKey = 'id_asignatura';
  public $incrementing = false;
  protected $fillable = [
      'id_asignatura', 'id_malla', 'nombre',
      'creditos', 'prerequisito', 'posicion_x', 'posicion_y', 'id_malla'
  ];
  public function historial(){
    return $this->hasMany(Hisotiale::class, 'id_asignatura', 'id_asignatura');
  }
  public function malla(){
    return $this->belongsTo(Malla::class, 'id_malla', 'id_malla');
  }
  public function ramosimpartido(){
    return $this->hasMany(RamosImpartido::class, 'id_asignatura', 'id_asignatura');
  }
}
