<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class VersionRamo extends Model
{
  protected $primaryKey = 'id_ramo';
  protected $fillable = [
      'id_ramo' ,'id_asignatura', 'id_profesor', 'year', 'semestre'
  ];
  public function profesore(){
    return $this->belongsTo('App\Profesore');
  }
  public function asignatura(){
    return $this->belongsTo(Asignatura::class, 'id_asignatura', 'id_asignatura');
  }
  public function horario(){
    return $this->hasMany(Horario::class, 'id_ramo', 'id_ramo');
  }
  public function ramosactuale(){
    return $this->hasMany(RamosActuale::class, 'id_ramo', 'id_ramo');
  }

}
