<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Middleware\Director;
use Auth;
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
        $usuario = DB::table($tipo)->where('id', $id)->get();
        foreach($usuario as $user){
            return response()->json($usuario);
        }
    }

    public function Datos_s(Request $request){
        $id = $request->id;
        $tipo = $request->tipo;
        $usuario = DB::table($tipo)->where('id', $id)->get();
        foreach($usuario as $user){
            return response()->json($usuario);
        }
    }

    public function Datos_d(Request $request){
        $id = $request->id;
        $tipo = $request->tipo;
        $usuario = DB::table($tipo)->where('id', $id)->get();
        foreach($usuario as $user){
            return response()->json($usuario);
        }
    }

    public function datos_p(Request $request){
        $id = $request->id;
        $tipo = $request->tipo;
        $usuario = DB::table($tipo)->where('id', $id)->get();
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
}
