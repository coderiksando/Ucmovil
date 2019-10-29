<?php

use Illuminate\Database\Seeder;

class HorarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		DB::statement('SET FOREIGN_KEY_CHECKS=0;');
		DB::table('horarios')->truncate();
		DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('horarios')->insert([
	        'id_ramo' => '1',
	        'modulo' => '1',
	        'dia' => 'Lunes',
	        'sala' => '24',
          'estado'=> 'Aceptada'
	    ]);
	    DB::table('horarios')->insert([
	        'id_ramo' => '1',
	        'modulo' => '2',
	        'dia' => 'Lunes',
	        'sala' => '24',
          'estado'=> 'Aceptada'
	    ]);
	    DB::table('horarios')->insert([
	        'id_ramo' => '2',
	        'modulo' => '2',
	        'dia' => 'Martes',
	        'sala' => '24',
          'estado'=> 'Aceptada'
	    ]);
    }
}
