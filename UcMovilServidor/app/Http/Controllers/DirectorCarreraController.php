<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Response;
use App\Http\Middleware\Director;

//Todos los modelos que se requeriran para controlar las funciones
use Auth; //Los valores de user estan en auth
use App\VersionRamo;
use App\Asignatura;
use App\DirectoresCarrera;
use App\Horario;
use App\Malla;
use App\Profesore;

class DirectorCarreraController extends Controller
{
  public function index()
  {
      return view('DirectorIndex');
  }

  public function mostrar_asignatura(Request $request)  //entrega todos los datos de las asignaturas, buscando el tipo de malla
  {
    $busqueda_malla = $request->id_malla;
    if ($busqueda_malla == NULL) {
      $asignaturas  = DB::table('asignaturas')
                      ->select('asignaturas.*')
                      ->orderBy('nombre')
                      ->get();  //conexion a la base de datos y ordenados
      $mallas       = DB::table('mallas')
                      ->select('mallas.*')
                      ->orderBy('id_malla')
                      ->get();
      
      return response()->json(array('asignatura' => $asignaturas, 'mallas' => $mallas));  //entrega datos en forma de objeto json
    }
    else {
      $asignaturas["asignatura"] = DB::table('asignaturas')
                                      ->join('mallas', 'asignaturas.id_malla','mallas.id_malla')
                                      ->select('asignaturas.*')
                                      ->where('asignaturas.id_malla',$busqueda_malla)
                                      ->orderBy('nombre')
                                      ->get();  //conexion a la base de datos y ordenados

      return response()->json($asignaturas);  //entrega datos en forma de objeto json
    }
  }

  public function anadir_asignatura(Request $request)
  {
    $asignatura = new Asignatura;   //se crea una estructura para ingresar en Asignatura
    $asignatura->id_asignatura=$request->id_asignatura; //se ingresan los datos de los request
    $asignatura->nombre=$request->nombre;
    $asignatura->creditos=$request->creditos;
    $asignatura->prerequisito=$request->prerequisito;
    $asignatura->posicion_x=$request->posicion_x;
    $asignatura->posicion_y=$request->posicion_y;
    $asignatura->id_malla=$request->id_malla;
    $asignatura->save(); //se guarda en la base de datos todos los valores de la variable
    // return "ok";
  }

  public function modificar_asignatura(Request $request)
  {
    $id_asignatura=$request->id_asignatura; //se ingresan los datos de los request
    $nombre=$request->nombre;
    $creditos=$request->creditos;
    $prerequisito=$request->prerequisito;
    if ($prerequisito == '' ){  //se establece relacion entre valor nulo y sin valor
      $prerequisito = null;
    }
    $posicion_x=$request->posicion_x;
    $posicion_y=$request->posicion_y;
    $id_malla=$request->id_malla;
    DB::table("asignaturas")->where('id_asignatura',$id_asignatura)->update([ //se hace un update en la tabla
          'nombre'=>$nombre,
          'creditos'=>$creditos,
          'prerequisito'=>$prerequisito,
          'posicion_x'=>$posicion_x,
          'posicion_y'=>$posicion_y,
          'id_malla'=>$id_malla
        ]);
    // return "ok";
  }

  public function borrar_asignatura(Request $request)
  {
    $id_asignatura=$request->id_asignatura; //se ingresan los datos de los request
    DB::table("asignaturas")->where('id_asignatura',$id_asignatura)->delete();  //se borra el dato de la tabla
    // return "ok";
  }

  public function mostrar_profesores(Request $request){ //se busca un profesor tanto con id_profesor o sin id_profesor
    if ($request->id_profesor == NULL) {
      $profesores["profesor"] =   DB::table('profesores')
                                      ->orderBy('nombre')
                                      ->orderBy('especialidad')
                                      ->get();  //conexion a la base de datos y ordenados
      return response()->json($profesores);  //entrega datos en forma de objeto json
    }
    else {
      $profesores["profesor"] =   DB::table('profesores')
                                      ->where('id',$request->id_profesor)
                                      ->orderBy('nombre')
                                      ->orderBy('especialidad')
                                      ->get();  //conexion a la base de datos y ordenados
      return response()->json($profesores);  //entrega datos en forma de objeto json
    }
  }

  public function anadir_profesor_ramo(Request $request)  //se crea un nuevo registro de versionramo
  {
    $ramo = VersionRamo::create([ 'id_asignatura' => $request->id_asignatura,
                                  'id_profesor' => $request->id_profesor,
                                  'year' => $request->year,
                                  'semestre' => $request->semestre]);
    $ramo->save();
    // return "ok";
  }

  public function mostrar_version_ramo(Request $request){ //buscamos un registro de version ramo, el nombre del profesor al cual está vinculado y la asignatura.
    $busqueda_malla = $request->id_malla;
    $version_ramo["version_ramo"] = DB::table('version_ramos')
                                    ->join('profesores', 'version_ramos.id_profesor','profesores.id')
                                    ->join('asignaturas', 'version_ramos.id_asignatura','asignaturas.id_asignatura')
                                    ->select('version_ramos.*',
                                    'profesores.nombre as nombre_profesor',
                                    'asignaturas.nombre as nombre_asignatura')
                                    ->where('asignaturas.id_malla',$busqueda_malla)
                                    ->orderBy('year','desc')
                                    ->orderBy('semestre','desc')
                                    ->get();  //conexion a la base de datos y ordenados
    return response()->json($version_ramo);  //entrega datos en forma de objeto json
  }

  public function borrar_version_ramo(Request $request){  //borra un registro de version ramo
    $id_borrar= $request->id_ramo;
    DB::table("version_ramos")->where('id_ramo',$id_borrar)->delete();
    // return "ok";
  }

  public function busqueda_sala(Request $request){  //se hace una busqueda en horarios, dependiendo el numero de sala y dia
    $sala = $request->numero_sala;
    $dia = $request->dia;
    $horario["horario"]= DB::table('horarios')
                                    ->where([ 'horarios.sala'=>$sala,
                                              'estado'=>'Aceptada',
                                              'dia'=>$dia])
                                    ->get();  //se obtienen los valores de horarios
    return response()->json($horario);  //entrega datos en forma de objeto json
  }

  public function enviar_horario(Request $request){ //se envian los horarios en forma iterativa para crear todas las salas.
    $horario = Horario::create([  'id_ramo' => $request->id_ramo,
                                  'modulo' => $request->modulo,
                                  'dia' => $request->dia,
                                  'sala' => $request->sala,
                                  'estado' => $request->estado]);
    $horario->save();
    // return "ok";
  }
  public function consultaTotalMallas(){
    $mallas["mallas"] = DB::table('mallas')
                          ->select('mallas.*')
                          ->orderBy('mallas.id_malla')
                          ->get();
    return $mallas;
  }
  public function Mensajeria(Request $request)  //busca los registros de secretaria
  {
    $ProfesoresResultado["profesores"] = DB::table('secretarias')->get();

    return response()->json($ProfesoresResultado);
  }
  public function MensajeriaE(Request $request) //busca los registros de profesor
  {
    $ProfesoresResultado["profesores"] = DB::table('profesores')->get();

    return response()->json($ProfesoresResultado);
  }
  public function Mensajes(Request $request)  //busca el chat de x persona vinculada
  {
    $MensajesChat["chat"] = DB::table('chat') ->where('id_remitente', $request->id_remitente)
                                              ->where('id_destinatario', $request->id_destinatario)
                                              ->orwhere('id_remitente', $request->id_destinatario)
                                              ->where('id_destinatario', $request->id_remitente)->get();

    return response()->json($MensajesChat);
  }
}
