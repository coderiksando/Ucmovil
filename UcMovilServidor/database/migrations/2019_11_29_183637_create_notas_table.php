<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNotasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notas', function (Blueprint $table) {
            $table->integer('id_ramo')->unsigned();
            $table->integer('id_alumno')->unsigned();
            $table->float('nota');
            $table->integer('n_nota');
            $table->timestamps();
            $table->primary(['id_ramo','id_alumno', 'n_nota']);
            $table->foreign('id_ramo')->references('id_ramo')->on('version_ramos');
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
        Schema::dropIfExists('notas');
    }
}
