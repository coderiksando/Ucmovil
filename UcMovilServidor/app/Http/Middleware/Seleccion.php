<?php

namespace App\Http\Middleware;

use Auth;
use Closure;
use Session;

class Seleccion
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
      $tipo_user=Auth::user()->tipo; //paso del valor del authenticate a una variable que pueda medirse

      if($tipo_user == "alumno"){ //validar si es director de carrera
        return redirect()->to('alumno'); //sigue con el paso normal de ingreso
      }
      if($tipo_user == "director_carrera"){ //validar si es director de carrera
        return redirect()->to('d_escuela'); //sigue con el paso normal de ingreso
      }
      if($tipo_user == "profesor"){ //validar si es director de carrera
        return redirect()->to('profesor'); //sigue con el paso normal de ingreso
      }
      if($tipo_user == "secretaria"){ //validar si es director de carrera
        return redirect()->to('secretaria'); //sigue con el paso normal de ingreso
      }
      else{
        return redirect()->to('home'); //devuelve texto cortando el paso
      }
    }
}
