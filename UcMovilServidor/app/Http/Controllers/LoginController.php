<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;
use App\User;

class LoginController extends Controller
{
	public function __construct()
  {
      $this->middleware('cors');
  }

    public function Login(){
    	$credentials = $this->validate(request(),[
    		'email' => 'required|string',
    		'password'=>'required|string'
    		]);

    	if(Auth::attempt($credentials, true)){

            $Usuarios["usuarios"] =   DB::table('users')->where('email', Auth()->user()->email)->get();
            //conexion a la base de datos y ordenados
            return $Usuarios;//entrega datos en forma de objeto json
    	}
    	return "no";
    }
}
