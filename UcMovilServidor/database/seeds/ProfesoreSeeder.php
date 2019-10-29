<?php

use Illuminate\Database\Seeder;

class ProfesoreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::statement('SET FOREIGN_KEY_CHECKS=0;');
      DB::table('profesores')->truncate();
      DB::statement('SET FOREIGN_KEY_CHECKS=1;');

      DB::table('profesores')->insert([
        'id' => '2',
        'ano_ingreso' => '2015',
        'especialidad' => 'Programador',
        'nombre' => 'Savio',
        'telefono' => '+56988888888',
        'apodo'=>'Sak'
      ]);

      DB::table('profesores')->insert([
        'id' => '7',
        'ano_ingreso' => '2015',
        'especialidad' => 'Programador',
        'nombre' => 'Raziel',
        'telefono' => '+123123',
        'apodo'=>'El Ra'
      ]);
    }
}
