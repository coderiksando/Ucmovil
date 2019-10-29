<?php

use Illuminate\Database\Seeder;

class VersionRamoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::statement('SET FOREIGN_KEY_CHECKS=0;');
      DB::table('version_ramos')->truncate();
      DB::statement('SET FOREIGN_KEY_CHECKS=1;');

    	DB::table('version_ramos')->insert([
        	'id_ramo' => '1',
        	'id_asignatura' => 'ICI-612',
        	'id_profesor' => '2',
          'year' => '2018',
          'semestre' => '1'
      	]);
        DB::table('version_ramos')->insert([
          'id_ramo' => '2',
        	'id_asignatura' => 'ICI-115',
        	'id_profesor' => '2',
          'year' => '2018',
          'semestre' => '2'
      	]);
        DB::table('version_ramos')->insert([
          'id_ramo' => '3',
        	'id_asignatura' => 'ICI-116',
        	'id_profesor' => '2',
          'year' => '2018',
          'semestre' => '2'
      	]);
        DB::table('version_ramos')->insert([
          'id_ramo' => '4',
        	'id_asignatura' => 'ICI-117',
        	'id_profesor' => '2',
          'year' => '2018',
          'semestre' => '2'
      	]);
        DB::table('version_ramos')->insert([
          'id_ramo' => '5',
        	'id_asignatura' => 'ICI-118',
        	'id_profesor' => '2',
          'year' => '2018',
          'semestre' => '2'
      	]);
    }
}
