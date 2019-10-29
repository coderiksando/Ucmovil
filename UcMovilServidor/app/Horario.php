<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Horario extends Model
{
  protected $fillable = [
      'id_ramo', 'modulo', 'dia',
      'sala','estado'
  ];
  public function versionramo(){
    return $this->belongsTo(VersionRamo::class, 'id_ramo', 'id_ramo');
  }
}
