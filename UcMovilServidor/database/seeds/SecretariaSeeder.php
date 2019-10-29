<?php

use Illuminate\Database\Seeder;

class SecretariaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::statement('SET FOREIGN_KEY_CHECKS=0;');
      DB::table('secretarias')->truncate();
      DB::statement('SET FOREIGN_KEY_CHECKS=1;');

      DB::table('secretarias')->insert([
        'id' => '3',
        'nombre' => 'Sergio',
        'telefono' => '+56977777777',
        'apodo'=>'Xexo'
      ]);
    }
}
