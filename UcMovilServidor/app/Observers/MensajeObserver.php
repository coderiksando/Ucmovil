<?php

namespace App\Observers;
use App\Events\NewMensaje;
use App\Mensaje;

class MensajeObserver
{
    public function creating(Mensaje $mensaje){
        event(new NewMensaje($mensaje));
    }
}
