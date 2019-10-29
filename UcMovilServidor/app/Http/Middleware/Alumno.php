<?php

namespace App\Http\Middleware;

use Auth;
use Closure;
use Session;

class Alumno
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
     public function handle($request, Closure $next) //controlador intermedio que verifica el tipo del usuario
     {
         $tipo_user=Auth::user()->tipo; //paso del valor del authenticate a una variable que pueda medirse

         if($tipo_user == "alumno"){ //validar si es director de carrera
           return $next($request); //sigue con el paso normal de ingreso
         }
         else{
           return redirect()->to('home'); //devuelve texto cortando el paso
         }
     }
}
