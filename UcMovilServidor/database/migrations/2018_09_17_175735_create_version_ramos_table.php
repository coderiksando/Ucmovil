<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVersionRamosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('version_ramos', function (Blueprint $table) {
            $table->increments('id_ramo');
            $table->string('id_asignatura', 10);
            $table->integer('id_profesor')->unsigned();
            $table->integer('year');
            $table->integer('semestre');
            $table->timestamps();
            $table->foreign('id_asignatura')->references('id_asignatura')->on('asignaturas');
            $table->foreign('id_profesor')->references('id')->on('profesores');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('version_ramos');
    }
}
