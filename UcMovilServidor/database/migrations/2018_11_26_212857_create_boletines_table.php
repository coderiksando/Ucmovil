<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBoletinesTable extends Migration
{

    public function up()
    {
        Schema::create('boletines', function (Blueprint $table) {
            $table->increments('id');
            $table->string('asunto');
            $table->string('contenido');
            $table->string('propietario');
            $table->integer('estado');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('boletines');
    }
}
