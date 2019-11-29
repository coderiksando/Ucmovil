<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\User;
use App\Alumno;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function run()
    {
      DB::statement('SET FOREIGN_KEY_CHECKS=0;');
      DB::table('users')->truncate();
      DB::statement('SET FOREIGN_KEY_CHECKS=1;');

      DB::table('users')->insert([
        'id' => '1',
        'email' => 'a@gmail.com',
        'password' => bcrypt('a'),
        'tipo' => 'alumno'
      ]);
      DB::table('users')->insert([
        'id' => '2',
        'email' => 'p@gmail.com',
        'password' => bcrypt('p'),
        'tipo' => 'profesor'
      ]);
      DB::table('users')->insert([
        'id' => '3',
        'email' => 's@gmail.com',
        'password' => bcrypt('s'),
        'tipo' => 'secretaria'
      ]);
      DB::table('users')->insert([
        'id' => '4',
        'email' => 'd@gmail.com',
        'password' => bcrypt('d'),
        'tipo' => 'director_carrera'
      ]);
      
      factory(User::class, 100)->create([
        'tipo' => 'alumno'
      ]);
  }
}
