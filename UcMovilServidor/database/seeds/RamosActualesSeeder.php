<?php

use Illuminate\Database\Seeder;
use App\VersionRamo;
use App\Alumno;
use App\RamosActuale;

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

        $ramos = VersionRamo::all()->pluck('id_ramo');
        foreach ($ramos as $id) {
            $alumnos = Alumno::all()->pluck('id');
            foreach ($alumnos as $id_alumno) {
                factory(RamosActuale::class)->create([
                    'id_ramo' => $id,
                    'id_alumno' => $id_alumno
                ]);
            }
        }
    }
}
