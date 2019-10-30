<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNoticiasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('noticias', function (Blueprint $table) {
            $table->increments('id_noticia');
            $table->string('titulo');
            $table->string('texto');
            $table->string('estado');
            $table->string ('propietario');
            $table->string('tag')->nullable();
            $table->timestamps();
        });
        DB::statement('ALTER TABLE noticias ADD CONSTRAINT noticias_tags
        CHECK ( tag = "Oferta laboral"  or tag = "Practica laboral"  or tag = "Tesis" or
                tag = "Seminario"       or tag = "Sala asignada"     or tag = "Horario asignado"  or
                tag = "Obligatoria"     or tag = "Clase suspendida");');

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('noticias');
    }
}
