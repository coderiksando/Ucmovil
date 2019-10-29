<?php

namespace App;

use App\ClavesMultiples;
use Illuminate\Database\Eloquent\Model;


class RamosActuale extends ClavesMultiples
{
  protected $primaryKey = ['id_ramo', 'id_alumno', 'n_nota'];
  public $incrementing = false;

  protected $fillable = [
      'id_ramo', 'id_alumno', 'nota', 'n_nota'
  ];
  
  public function alumno(){
    return $this->belongsTo(Alumno::class, 'id_alumno', 'id');
  }
  public function versionramo(){
    return $this->belongsTo(VersionRamo::class, 'id_ramo', 'id_ramo');
  }


}

