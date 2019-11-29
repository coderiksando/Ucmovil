<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
     public function run()
     {
       $this->call('UserSeeder');
       $this->call('MallaSeeder');
       $this->call('AlumnoSeeder');
       $this->call('ProfesoreSeeder');
       $this->call('SecretariaSeeder');
       $this->call('DirectoresCarreraSeeder');
       $this->call('AsignaturaSeeder');
       $this->call('VersionRamoSeeder');
       $this->call('HorarioSeeder');
       $this->call('NotasSeeder');
       $this->call('NoticiaSeeder');
       $this->call('PonderacionesRamoSeeder');
       $this->call('RamosActualesSeeder');
     }
}
