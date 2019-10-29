<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    protected $fillable = [
        'id','email', 'password', 'tipo',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function alumno(){
      return $this->hasOne(Alumno::class, 'id', 'id');
    }
    public function profesore(){
      return $this->hasOne(Profesore::class, 'id', 'id');
    }
    public function secretaria(){
      return $this->hasOne(Secretaria::class, 'id', 'id');
    }
    public function directorcarrera(){
      return $this->hasOne(DirectoresCarrera::class, 'i', 'id');
    }
}
