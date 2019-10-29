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
        CHECK ( tag = "Oferta laboral"  and tag = "Practica laboral"  and tag = "Tesis" and
                tag = "Seminario"       and tag = "Sala asignada"     and tag = "Horario asignado"  and
                tag = "Obligatoria"     and tag = "Clase suspendida");');

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
