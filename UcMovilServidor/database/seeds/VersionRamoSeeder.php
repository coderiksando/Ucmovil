<?php

use Illuminate\Database\Seeder;
use App\VersionRamo;

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

      factory(VersionRamo::class, 20)->create([
        'year' => '2020',
        'semestre' => '1'
      ]);
    }
}
