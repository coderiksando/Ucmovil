<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Middleware\Director;
use Auth;
use App\User;
use App\Profesore;
use App\Secretaria;
use App\DirectoresCarrera;
use App\Alumno;

use App\Chat;
use App\Events\NewMensaje;
use App\Events\NewMessageNotification;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
  {
      $this->middleware('cors');
  }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    
    public function index()
    {
        return view('home');
    }
    public function Datos_a(Request $request){
        $id = $request->id;
        $tipo = $request->tipo;
        $usuario = DB::table($tipo)
        ->join('users', ['alumnos.id' => 'users.id'])
        ->select('alumnos.id', 'ano_ingreso', 'nombre', 'ano_nacimiento', 'telefono', 'direccion', 'apodo', 'id_malla', 'id_malla as subtxt', 'semestre_actual', 'users.email', 'users.tipo')
        ->where('alumnos.id', $id)->get();
        foreach($usuario as $user){
            return response()->json($usuario);
        }
    }

    public function Datos_s(Request $request){
        $id = $request->id;
        $tipo = $request->tipo;
        $usuario = DB::table($tipo)
        ->join('users', ['secretarias.id' => 'users.id'])
        ->select('secretarias.id', 'nombre', 'telefono','apodo', 'apodo as subtxt', 'users.email', 'users.tipo')
        ->where('secretarias.id', $id)->get();
        foreach($usuario as $user){
            return response()->json($usuario);
        }
    }

    public function Datos_d(Request $request){
        $id = $request->id;
        $tipo = $request->tipo;
        $usuario = DB::table($tipo)
        ->join('users', ['directores_carreras.id' => 'users.id'])
        ->select('directores_carreras.id', 'especialidad', 'especialidad as subtxt', 'nombre', 'telefono', 'apodo', 'users.email', 'users.tipo')
        ->where('directores_carreras.id', $id)->get();
        foreach($usuario as $user){
            return response()->json($usuario);
        }
    }

    public function datos_p(Request $request){
        $id = $request->id;
        $tipo = $request->tipo;
        $usuario = DB::table($tipo)
        ->join('users', ['profesores.id' => 'users.id'])
        ->select('profesores.id', 'ano_ingreso', 'especialidad', 'especialidad as subtxt', 'nombre', 'telefono', 'apodo', 'users.email', 'users.tipo')
        ->where('profesores.id', $id)->get();
        foreach($usuario as $user){
            return response()->json($usuario);
        }
    }

    public function CambioC(Request $request){
        $id = $request->id;
        $password = $request->password;
        $tipo = $request->tipo;
        DB::table('users')->where('id', $id)->update([
            'password'=>bcrypt($password)
          ]);
        return "ok";
    }

    public function CambioA(Request $request){
        $id = $request->id;
        $apodo = $request->apodo;
        $tipo = $request->tipo;
        DB::table($tipo)->where('id', $id)->update([
            'apodo'=>$apodo
          ]);
        return "ok";
    }

    public function CambioE(Request $request){
        $id = $request->id;
        $email = $request->email;
        $tipo = $request->tipo;
        DB::table('users')->where('id', $id)->update([
            'email'=>$email
          ]);
        return "ok";
    }

    public function Solicitud(Request $request){
        $id = $request->id;
        $solicitar = $request->solicitud;
        $text = $request->texto;
        $estado = $request->estado;
        DB::table('solicitudes')->insert([
            'id_solicitante'=>$id,
            'solicitud'=>$solicitar,
            'texto'=>$text,
            'estado'=>$estado
          ]);
        return "ok";
    }

    public function Mensaje(Request $request){
        $mensaje = new Chat;   
        $mensaje->id_remitente = $request->id_remitente;
        $mensaje->id_destinatario = $request->id_destinatario;
        $mensaje->tipo_remitente = $request->tipo_remitente;
        $mensaje->nombre = $request->nombre;
        $mensaje->texto = $request->texto;
        $mensaje->save();        
        event(new NewMessageNotification($mensaje));
    }

    public function modificarPerfil(Request $request){
        if ($request->tipo == 'email') {
            $user = User::find($request->id);
            $user->email = $request->email;
            $user->save();
        }else{
            if ($request->usertipe == 'profesor') $user = Profesore::find($request->id);
            if ($request->usertipe == 'alumno') $user = Alumno::find($request->id);
            if ($request->usertipe == 'secretaria') $user = Secretaria::find($request->id);
            if ($request->usertipe == 'director_carrera') $user = DirectoresCarrera::find($request->id);

            $user->telefono = $request->phone;
            $user->save();
        }

    }
}
