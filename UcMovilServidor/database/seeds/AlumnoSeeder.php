<?php

use Illuminate\Database\Seeder;

class AlumnoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::statement('SET FOREIGN_KEY_CHECKS=0;');
      DB::table('alumnos')->truncate();
      DB::statement('SET FOREIGN_KEY_CHECKS=1;');

      DB::table('alumnos')->insert([
        'id' => '1',
        'ano_ingreso' => '0001/01/01',
        'nombre' => 'Bastian',
        'ano_nacimiento' => '1995',
        'telefono' => '+56999999999',
        'direccion' => 'El campo bien lejos',
        'semestre_actual' => '9',
        'apodo'=>'Tiano',
        'id_malla'=>'ICI'
      ]);

      DB::table('alumnos')->insert([
        'id' => '6',
        'ano_ingreso' => '0001/01/01',
        'nombre' => 'Savioo',
        'ano_nacimiento' => '1995',
        'telefono' => '9997878',
        'direccion' => 'Mi casa',
        'semestre_actual' => '1',
        'apodo'=>'Sak',
        'id_malla'=>'ICI'
      ]);
    }
}
