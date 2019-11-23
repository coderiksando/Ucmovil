<?php

use Illuminate\Database\Seeder;

class RamosActualeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('ramos_actuales')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        
        for ($i=1; $i <= 10; $i++) {
            DB::table('ramos_actuales')->insert([
                'id_ramo' => '1',
	            'id_alumno' => '1',
	            'nota' => rand(10, 70) / 10,
	            'n_nota' => $i
            ]);
        }

        for ($i=1; $i <= 10; $i++) {
            DB::table('ramos_actuales')->insert([
                'id_ramo' => '1',
	            'id_alumno' => '6',
	            'nota' => rand(10, 70) / 10,
	            'n_nota' => $i
            ]);
        }

        for ($i=1; $i <= 10; $i++) {
            DB::table('ramos_actuales')->insert([
                'id_ramo' => '1',
	            'id_alumno' => '90',
	            'nota' => rand(10, 70) / 10,
	            'n_nota' => $i
            ]);
        }
        for ($i=1; $i <= 10; $i++) {
            DB::table('ramos_actuales')->insert([
                'id_ramo' => '1',
	            'id_alumno' => '91',
	            'nota' => rand(10, 70) / 10,
	            'n_nota' => $i
            ]);
        }
        for ($i=1; $i <= 10; $i++) {
            DB::table('ramos_actuales')->insert([
                'id_ramo' => '1',
	            'id_alumno' => '92',
	            'nota' => rand(10, 70) / 10,
	            'n_nota' => $i
            ]);
        }
        for ($i=1; $i <= 10; $i++) {
            DB::table('ramos_actuales')->insert([
                'id_ramo' => '1',
	            'id_alumno' => '93',
	            'nota' => rand(10, 70) / 10,
	            'n_nota' => $i
            ]);
        }
        
    }
}
