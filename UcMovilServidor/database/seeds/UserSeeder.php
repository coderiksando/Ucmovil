<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\User;

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
        'email' => 'alumno@gmail.com',
        'password' => bcrypt('alumno'),
        'tipo' => 'alumno'
      ]);
      DB::table('users')->insert([
        'id' => '2',
        'email' => 'profesor@gmail.com',
        'password' => bcrypt('profesor'),
        'tipo' => 'profesor'
      ]);
      DB::table('users')->insert([
        'id' => '3',
        'email' => 'secretaria@gmail.com',
        'password' => bcrypt('secretaria'),
        'tipo' => 'secretaria'
      ]);
      DB::table('users')->insert([
        'id' => '4',
        'email' => 'directorcarrera@gmail.com',
        'password' => bcrypt('directorcarrera'),
        'tipo' => 'director_carrera'
      ]);
      DB::table('users')->insert([
        'id' => '6',
        'email' => 'sak.kancer@gmail.com',
        'password' => bcrypt('savio'),
        'tipo' => 'alumno'
      ]);
      DB::table('users')->insert([
        'id' => '7',
        'email' => 'sak_psx@hotmail.com',
        'password' => bcrypt('123'),
        'tipo' => 'profesor'
      ]);
      DB::table('users')->insert([
        'id' => '90',
        'email' => '90@gmail.com',
        'password' => bcrypt('90'),
        'tipo' => 'alumno'
      ]);
      DB::table('users')->insert([
        'id' => '91',
        'email' => '91@gmail.com',
        'password' => bcrypt('91'),
        'tipo' => 'alumno'
      ]);
      DB::table('users')->insert([
        'id' => '92',
        'email' => '92@gmail.com',
        'password' => bcrypt('92'),
        'tipo' => 'alumno'
      ]);
      DB::table('users')->insert([
        'id' => '93',
        'email' => '93@gmail.com',
        'password' => bcrypt('93'),
        'tipo' => 'alumno'
      ]);
    }

}
