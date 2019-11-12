<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHorariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('horarios', function (Blueprint $table) {
            $table->integer('id_ramo')->unsigned();
            $table->integer('modulo');
            $table->string('dia', 10);
            $table->string('sala', 10);
            $table->string('estado',9);
            $table->timestamps();
            $table->primary(['id_ramo', 'dia', 'modulo']);
            $table->foreign('id_ramo')->references('id_ramo')->on('version_ramos');
            $table->unique(['modulo', 'dia', 'sala']);
        });
        DB::statement('ALTER TABLE horarios ADD CONSTRAINT horarios_valores_estado
        CHECK (estado = "Rechazada" or estado = "Aceptada" or estado = "Revision");');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('horarios');
    }
}
