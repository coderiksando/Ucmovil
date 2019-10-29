<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Secretaria extends Model
{
  protected $fillable = [
      'id', 'nombre', 'email',
      'telefono',
  ];

  public function user(){
    return $this->hasOne('App\User');
  }
}
