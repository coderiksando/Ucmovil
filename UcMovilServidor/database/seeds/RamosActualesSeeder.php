<?php

use Illuminate\Database\Seeder;

class RamosActualesSeeder extends Seeder
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
    }
}
