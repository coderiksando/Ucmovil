<?php

use Illuminate\Database\Seeder;

class HistorialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('historiales')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('historiales')->insert([
	        'id_asignatura' => 'ICI-116',
	        'id_alumno' => '1',
	        'estado' => 'Aprobado',
	        'Semestre' => '1',
	        'nota_final'=>'4'
      	]);
    }
}
