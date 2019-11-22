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
        'nombre' => 'Pedro Perez Peralta',
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
        'nombre' => 'Savio Campos Albornoz',
        'ano_nacimiento' => '1995',
        'telefono' => '9997878',
        'direccion' => 'Mi casa',
        'semestre_actual' => '1',
        'apodo'=>'Sak',
        'id_malla'=>'ICI'
      ]);
      DB::table('alumnos')->insert([
        'id' => '90',
        'ano_ingreso' => '0001/01/01',
        'nombre' => 'Raul Zagal Bernales',
        'ano_nacimiento' => '1995',
        'telefono' => '9997878',
        'direccion' => 'Mi casa',
        'semestre_actual' => '1',
        'apodo'=>'Ra',
        'id_malla'=>'ICI'
      ]);
      DB::table('alumnos')->insert([
        'id' => '91',
        'ano_ingreso' => '0001/01/01',
        'nombre' => 'Dieguito Armando Maladroga',
        'ano_nacimiento' => '1995',
        'telefono' => '9997878',
        'direccion' => 'Mi casa',
        'semestre_actual' => '1',
        'apodo'=>'Elduro',
        'id_malla'=>'ICI'
      ]);
      DB::table('alumnos')->insert([
        'id' => '92',
        'ano_ingreso' => '0001/01/01',
        'nombre' => 'Sir Velnassar Crowley',
        'ano_nacimiento' => '1995',
        'telefono' => '9997878',
        'direccion' => 'Mi casa',
        'semestre_actual' => '1',
        'apodo'=>'Velna',
        'id_malla'=>'ICI'
      ]);
      DB::table('alumnos')->insert([
        'id' => '93',
        'ano_ingreso' => '0001/01/01',
        'nombre' => 'Ramon Valdes Soto',
        'ano_nacimiento' => '1995',
        'telefono' => '9997878',
        'direccion' => 'Mi casa',
        'semestre_actual' => '1',
        'apodo'=>'Moncho',
        'id_malla'=>'ICI'
      ]);


    }
}
