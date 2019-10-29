<?php

use Illuminate\Database\Seeder;

class DirectoresCarreraSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::statement('SET FOREIGN_KEY_CHECKS=0;');
      DB::table('directores_carreras')->truncate();
      DB::statement('SET FOREIGN_KEY_CHECKS=1;');

      DB::table('directores_carreras')->insert([
        'id' => '4',
        'especialidad' => 'Programador',
        'nombre' => 'Erik',
        'telefono' => '+56966666666',
        'apodo'=>'ErikSempai'
      ]);
    }
}
