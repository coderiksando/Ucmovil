<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Middleware\Profesor;
use App\Http\Middleware\Cors;
use App\VersionRamo;
use App\PonderacionesRamo;
use App\RamosActuale;
use App\Boletine;
use App\Profesore;
use App\Nota;
use Auth;

class ProfesorController extends Controller
{

  	public function __construct()
  	{
    	/*$this->middleware('auth');      //revision del usuario conectado
      $this->middleware('profesor');  //cortador de paso para usuarios distintos a profesor*/
      $this->middleware('cors');
  	}

    public function mostrar_impartidos(Request $request)  //entrega todos los datos de los ramos impartidos
    {
      $impartidos =   DB::table('version_ramos')
                                    ->join('asignaturas', ['version_ramos.id_asignatura' => 'asignaturas.id_asignatura'])
                                    ->where('id_profesor', $request->id)
                                    ->select('version_ramos.id_ramo', 'version_ramos.id_asignatura', 'version_ramos.year', 'asignaturas.nombre', 'version_ramos.semestre')->get();
      return response()->json($impartidos);
	  }

    public function mostrar_ponderaciones(Request $request)  //entrega todos los datos de las ponderaciones
    {
      $ponderaciones = PonderacionesRamo::all()->where('id_ramo', $request->id)->values();  //conexion a la base de datos y ordenados
      return response()->json($ponderaciones);  //entrega datos en forma de json
    }

    public function mostrar_lista(Request $request)  //entrega la lista de alumnos pertenecientes a un curso
    {
      $AlumnosArray = DB::table('ramos_actuales')->select('id_alumno')->where('id_ramo', $request->id)->get(); //obtiene la lista de alumnos pertenecientes a un ramo

      $alumnos =   DB::table('alumnos')->select('id','nombre')->whereIn('id', $AlumnosArray->pluck('id_alumno'))->get();  //obtiene los datos de cada alumno incluido en el AlumnoArray 
      return response()->json($alumnos);  //entrega datos en forma de json
    }

    public function obtener_notas(Request $request) // Obtiene las notas de un alumno y las ponderaciones correspondientes al ramo.
    {
      $id_ramo =  $request->id_c;
      $id_alumno = $request->id_a;
      
      $notas = DB::table('notas')
                  ->select('nota')
                  ->where(['id_alumno' => $id_alumno, 'notas.id_ramo'=>$id_ramo])->get();

      return response()->json($notas->pluck('nota'));
    } 

    public function ingresar_notas(Request $request){
      for ($i=0; $i < $request->len; $i++) { 
        $nota = $request->$i;
        $notaactual = Nota::firstOrNew(['id_ramo' => $request->id_ramo, 'id_alumno' => $request->id_alumno, 'n_nota'=>$i+1]);
        $notaactual->nota = $request->$i;
        $notaactual->save();
      }
      return response(200)->header('Content-Type', 'text/plain');;
    }

     public function enviar_boletin(Request $request)
    {
      $profe = Profesore::find($request->id_profe)->nombre;
      Boletine::create(['asunto' => $request->asunto, 'contenido' => $request->contenido, 'propietario' => $profe, 'estado' => 0]);
      // return "ok";
    }

    public function obtener_horario(Request $request){
      if ($request->tipo == "alumno") {
        $RamosArray = RamosActuale::where('id_alumno', $request->id)->pluck('id_ramo');
      } else {
        $RamosArray = VersionRamo::where('id_profesor', $request->id)->pluck('id_ramo');
      }
      $Horarios = DB::table('horarios')
      ->join('version_ramos', ['horarios.id_ramo' => 'version_ramos.id_ramo'])
      ->join('asignaturas', ['version_ramos.id_asignatura' => 'asignaturas.id_asignatura'])
      ->select('nombre', 'asignaturas.id_asignatura', 'modulo', 'sala', 'dia')
      ->whereIn('horarios.id_ramo', $RamosArray)
      ->where('horarios.estado', 'Aceptada')
      ->get();
      return $Horarios;
    }


    public function ingresar_ponderaciones(Request $request)  //entrega todos los datos de los ramos impartidos
    {
        for ($i=1; $i <=10 ; $i++) {
          $P_nota = 'P_nota'.$i;
          $ponderacion = PonderacionesRamo::firstOrNew(['id_ramo'=> $request->id, 'N_nota' => $i]); 
          $ponderacion->P_nota = $request->$P_nota;
          $ponderacion->save();

          if ($ponderacion->P_nota == 0) {
            $notas = Nota::where(['id_ramo' => $request->id, 'n_nota' => $i])->delete();
          }
        }
        return response(200)->header('Content-Type', 'text/plain');;
    }

   	public function modificar_perfil(Request $request)
  	{
	    $perfil = new Profesore;   //se crea una estructura para ingresar los datos del profesor
	    $perfil->id_profesor = $request->id;
	    $perfil->ano_ingreso=$request->ano_ingreso; //se ingresan los datos de los request
	    $perfil->especialidad=$request->especialidad;
	    $perfil->nombre=$request->nombre;
	    $perfil->telefono=$request->telefono;
	    $perfil->save(); //se guarda en la base de datos todos los valores de la variable
	    // return "ok";
  	}

 	public function index()
  	{
   		return view('DirectorIndex'); //se debe cambiar la vista
  	}

    public function Mensajeria(Request $request)
    {
      $ProfesoresResultado["profesores"] = DB::table('secretarias')->get();

      return response()->json($ProfesoresResultado);
    }
  public function MensajeriaExtra(Request $request)
    {
      $ProfesoresResultado["profesores"] = DB::table('directores_carreras')->get();

      return response()->json($ProfesoresResultado);
    }
    public function Mensajes(Request $request)
    {
      $MensajesChat["chat"] = DB::table('chat')->where('id_remitente', $request->id_remitente)->where('id_destinatario', $request->id_destinatario)->orwhere('id_remitente', $request->id_destinatario)->where('id_destinatario', $request->id_remitente)->get();

      return response()->json($MensajesChat);
    }
    public function MensajesC(Request $request)
    {
      $MensajesChat["chat"] = DB::table('chat')->where('id_destinatario', $request->id_destinatario)->get();
      
      return response()->json($MensajesChat);
    }

    public function MensajeriaC(Request $request)
    {
      $ids= DB::table('version_ramos')->where('id_profesor', $request->id)->pluck('id_asignatura');
      
      $ramos["ramos"] = DB::table('asignaturas')->whereIn('id_asignatura', $ids)->get();

      return response()->json($ramos);
    }
}
