<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProfesoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profesores', function (Blueprint $table) {
          $table->integer('id')->unsigned();
          $table->integer('ano_ingreso');
          $table->string('especialidad');
          $table->string('nombre');
          $table->string('telefono');
          $table->string('apodo');
          $table->timestamps();
          $table->primary('id');
          $table->foreign('id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profesores');
    }
}
