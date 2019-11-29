<?php

use Illuminate\Database\Seeder;
use App\Alumno;
use App\User;

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
        'apodo'=>'Pedro',
        'id_malla'=>'ICI'
      ]);


      $alumnos = User::all()->where('tipo', 'alumno')->where('id','!=', '1')->pluck('id');

      foreach ($alumnos as $id) {
        factory(Alumno::class)->create([
          'id' => $id
        ]);
      }
    }
}
