<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DirectoresCarrera extends Model
{

  protected $fillable = [
      'id', 'especialidad', 'nombre',
      'email', 'telefono',
  ];

  public function user(){
    return $this->belongTo(User::class, 'id', 'id');
  }
}
