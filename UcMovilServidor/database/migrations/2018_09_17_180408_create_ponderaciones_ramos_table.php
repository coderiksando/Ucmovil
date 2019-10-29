<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePonderacionesRamosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ponderaciones_ramos', function (Blueprint $table) {
          $table->integer('id_ramo')->unsigned();
          $table->integer('N_nota');
          $table->float('P_nota');
          $table->timestamps();
          $table->primary(['id_ramo','N_nota']);
          $table->foreign('id_ramo')->references('id_ramo')->on('version_ramos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ponderaciones_ramos');
    }
}
