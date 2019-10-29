<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAlumnosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('alumnos', function (Blueprint $table) {
            $table->integer('id')->unsigned();
            $table->date('ano_ingreso');
            $table->string('nombre');
            $table->integer('ano_nacimiento');
            $table->string('telefono');
            $table->string('direccion');
            $table->string('apodo');
            $table->string('id_malla', 3);
            $table->integer('semestre_actual');
            $table->timestamps();
            $table->primary('id');
            $table->foreign('id')->references('id')->on('users');
            $table->foreign('id_malla')->references('id_malla')->on('mallas');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('alumnos');
    }
}
