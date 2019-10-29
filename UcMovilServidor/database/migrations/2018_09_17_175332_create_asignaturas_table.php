<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAsignaturasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('asignaturas', function (Blueprint $table) {
          $table->string('id_asignatura',10)->primary();
          $table->string('nombre');
          $table->integer('creditos');
          $table->integer('posicion_x');
          $table->integer('posicion_y');
          $table->string('id_malla',3);
          $table->timestamps();
          $table->string('prerequisito')->nullable();
          $table->foreign('id_malla')->references('id_malla')->on('mallas');
          $table->unique(['posicion_x','posicion_y','id_malla']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('asignaturas');
    }
}
