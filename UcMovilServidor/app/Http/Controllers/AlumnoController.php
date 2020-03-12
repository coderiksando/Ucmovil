<?php

namespace App\Http\Controllers; 

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Middleware\Alumno;
use App\RamosActuale;
use App\Solicitude;
use Auth;

class AlumnoController extends Controller
{
	
  public function __construct()
  {
   /*   $this->middleware('auth');      //revision del usuario conectado
      $this->middleware('alumno');    //cortador de paso para usuarios distintos a alumno */
      $this->middleware('cors');

  }

  public function index()
  {
      return view('DirectorIndex');   //se debe cambiar la vista
  }

  public function RamosA(Request $request){
    $RamosA = DB::table('ramos_actuales')
                            ->where('id_alumno', $request->id)
                            ->distinct()->pluck('id_ramo');  

    $RamosActuale['datosramos'] = DB::table('version_ramos')
                                    ->join('asignaturas', 'version_ramos.id_asignatura', 'asignaturas.id_asignatura')
                                    ->join('profesores', 'version_ramos.id_profesor', 'profesores.id')
                                    ->join('horarios', 'version_ramos.id_ramo', 'horarios.id_ramo')
                                    ->select('asignaturas.id_asignatura', 'asignaturas.nombre as nombreasig', 'profesores.nombre', 'horarios.modulo', 'horarios.dia', 'horarios.sala')
                                    ->whereIn('version_ramos.id_ramo', $RamosA)
                                    ->get();

    return response()->json($RamosActuale);
  }
  public function RamosActuales(Request $request){
    $RamosA = DB::table('ramos_actuales')
                            ->where('id_alumno', $request->id)
                            ->distinct()->pluck('id_ramo');  

    $RamosActuale['ramosactuale'] = DB::table('version_ramos')
                                    ->join('asignaturas', 'version_ramos.id_asignatura', 'asignaturas.id_asignatura')
                                    ->join('ramos_actuales', 'version_ramos.id_ramo', 'ramos_actuales.id_ramo')
                                    ->select('asignaturas.nombre', 'ramos_actuales.nota', 'ramos_actuales.n_nota')
                                    ->whereIn('version_ramos.id_ramo', $RamosA)
                                    ->get();

    return response()->json($RamosActuale);
  }

  public function MensajeriaC(Request $request)
    {
      $ramosactuales = DB::table('ramos_actuales')->where('id_alumno', $request->id)->pluck('id_ramo');

      $ids= DB::table('version_ramos')->whereIn('id_ramo', $ramosactuales)->pluck('id_ramo');
      
      $RamosActuales = DB::table('version_ramos')->whereIn('id_ramo', $ids)->pluck('id_asignatura');

      $ramos["ramos"] = DB::table('asignaturas')->whereIn('id_asignatura', $RamosActuales)->get();

      return response()->json($ramos);
    }

    public function MensajesC(Request $request)
    {
      $MensajesChat["chat"] = DB::table('chat')->where('id_destinatario', $request->id_destinatario)->get();
      foreach($MensajesChat as $mensajes){
        foreach($mensajes as $nombre){
          $datosRemitente = DB::table('users')->where('id', $nombre->id_remitente)->select('tipo')->get();
        }
      }
      return response()->json($datosRemitente);
    }

    public function BuscarPorIdA(Request $request)
    {
      $Nombres = DB::table('alumnos')->where('id', $request->id)->get();
      foreach($Nombres as $nombre){
        return response()->json($nombre->nombre);
      }
    }
    public function ConsultaMalla(Request $request)
    {
      $Malla = DB::table('alumnos')->where('id', $request->id)->get();

      foreach ($Malla as $key) {
        return response()->json($key->id_malla);
      }
    }
    public function Solicitud(Request $request)
    {
      $id_solicitante = $request->id;
      $solicitud = $request->solicitud;
      $texto = $request->texto;
      $estado = $request->estado;

      $solicitudes = new Solicitude;
      $solicitudes->id_solicitante = $id_solicitante;
      $solicitudes->tipo = $solicitud;
      $solicitudes->solicitud = $solicitud;
      $solicitudes->texto = $texto;
      $solicitudes->estado = $estado;
      $solicitudes->save();

      // return "ok";
    }
}
