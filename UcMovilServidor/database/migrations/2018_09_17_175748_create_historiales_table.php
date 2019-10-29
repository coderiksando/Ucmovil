<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHistorialesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('historiales', function (Blueprint $table) {
            $table->string('id_asignatura',10);
            $table->integer('id_alumno')->unsigned();
            $table->string('estado');
            $table->integer('semestre');
            $table->integer('nota_final');
            $table->timestamps();
            $table->primary(['id_asignatura','id_alumno']);
            $table->foreign('id_asignatura')->references('id_asignatura')->on('asignaturas');
            $table->foreign('id_alumno')->references('id')->on('alumnos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('historiales');
    }
}
