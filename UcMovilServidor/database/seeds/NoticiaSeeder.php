<?php

use Illuminate\Database\Seeder;

class NoticiaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::statement('SET FOREIGN_KEY_CHECKS=0;');
      DB::table('noticias')->truncate();
      DB::statement('SET FOREIGN_KEY_CHECKS=1;');

      DB::table('noticias')->insert([
        'id_noticia' => '1',
        'titulo'=>'Noticia1',
        'texto' => 'Esta noticia 1',
        'estado' => 'Revision',
        'propietario' => 'Profesor X',
        'tag' => 'Obligatoria'
      ]);
      DB::table('noticias')->insert([
        'id_noticia' => '4',
        'titulo'=>'Noticia1',
        'texto' => 'Esta noticia 4',
        'estado' => 'Revision',
        'propietario' => 'Profesor X',
        'tag' => 'Obligatoria'
      ]);
      DB::table('noticias')->insert([
        'id_noticia' => '2',
        'titulo'=>'Noticia1',
        'texto' => 'Esta noticia 2',
        'estado' => 'Aprobada',
        'propietario' => 'Profesor Y',
        'tag' => 'Obligatoria',
        'updated_at' => '2018-10-22 14:57:29'
      ]);
      DB::table('noticias')->insert([
        'id_noticia' => '3',
        'titulo'=>'Noticia1',
        'texto' => 'Esta noticia 3',
        'estado' => 'Rechazada',
        'propietario' => 'Profesor Z',
        'tag' => 'Obligatoria'
      ]);
      DB::table('noticias')->insert([
        'id_noticia' => '5',
        'titulo'=>'Noticia1',
        'texto' => 'Esta noticia 5',
        'estado' => 'Aprobada',
        'propietario' => 'Profesor Y',
        'tag' => 'Obligatoria',
        'updated_at' => '2018-10-22 14:57:29'
      ]);
      DB::table('noticias')->insert([
        'id_noticia' => '6',
        'titulo'=>'Noticia1',
        'texto' => 'Esta noticia 6',
        'estado' => 'Rechazada',
        'propietario' => 'Profesor Z',
        'tag' => 'Obligatoria'
      ]);
    }
}
