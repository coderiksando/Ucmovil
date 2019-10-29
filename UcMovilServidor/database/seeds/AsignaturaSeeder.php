<?php

use Illuminate\Database\Seeder;

class AsignaturaSeeder extends Seeder
{
    public function run()
    {
      DB::statement('SET FOREIGN_KEY_CHECKS=0;');
      DB::table('asignaturas')->truncate();
      DB::statement('SET FOREIGN_KEY_CHECKS=1;');

      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-115',
        'nombre' => 'Algebra',
        'creditos' => '10',
        'posicion_x' => '1',
        'posicion_y' => '1',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-116',
        'nombre' => 'Calculo I',
        'creditos' => '10',
        'posicion_x' => '1',
        'posicion_y' => '3',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-117',
        'nombre' => 'introduccion a la computacion',
        'creditos' => '8',
        'posicion_x' => '1',
        'posicion_y' => '4',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-114',
        'nombre' => 'introduccion a la lingenieria',
        'creditos' => '8',
        'posicion_x' => '1',
        'posicion_y' => '5',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-126',
        'nombre' => 'Algebra lineal',
        'creditos' => '10',
        'prerequisito' => 'ICI-115',
        'posicion_x' => '2',
        'posicion_y' => '1',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-123',
        'nombre' => 'Fisica I',
        'creditos' => '8',
        'posicion_x' => '2',
        'posicion_y' => '2',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-127',
        'nombre' => 'Calculo II',
        'creditos' => '10',
        'prerequisito' => 'ICI-117',
        'posicion_x' => '2',
        'posicion_y' => '3',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-128',
        'nombre' => 'Lenguaje de programacion',
        'creditos' => '8',
        'prerequisito' => 'ICI-117',
        'posicion_x' => '2',
        'posicion_y' => '4',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-118',
        'nombre' => 'Ingles I',
        'creditos' => '4',
        'prerequisito' => 'ICI-118',
        'posicion_x' => '2',
        'posicion_y' => '7',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-217',
        'nombre' => 'Algebra abstracta',
        'creditos' => '8',
        'prerequisito' => 'ICI-126',
        'posicion_x' => '3',
        'posicion_y' => '1',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-212',
        'nombre' => 'Fisica II',
        'creditos' => '9',
        'prerequisito' => 'ICI-123',
        'posicion_x' => '3',
        'posicion_y' => '2',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-213',
        'nombre' => 'Estadistica y Probabilidad',
        'creditos' => '10',
        'prerequisito' => 'ICI-127',
        'posicion_x' => '3',
        'posicion_y' => '3',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-214',
        'nombre' => 'Arquitectura de computadores I',
        'creditos' => '8',
        'prerequisito' => 'ICI-128',
        'posicion_x' => '3',
        'posicion_y' => '4',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-215',
        'nombre' => 'Estrucutra de Datos',
        'creditos' => '9',
        'prerequisito' => 'ICI-226',
        'posicion_x' => '3',
        'posicion_y' => '5',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-226',
        'nombre' => 'Tecnica de expresion oral y escrita',
        'creditos' => '5',
        'posicion_x' => '3',
        'posicion_y' => '6',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-221',
        'nombre' => 'Calculo III',
        'creditos' => '9',
        'prerequisito' => 'ICI-127',
        'posicion_x' => '4',
        'posicion_y' => '1',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-222',
        'nombre' => 'Transmision de Datos',
        'creditos' => '8',
        'prerequisito' => 'ICI-212',
        'posicion_x' => '4',
        'posicion_y' => '3',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-223',
        'nombre' => 'Arquitectura de Computadores II',
        'creditos' => '8',
        'prerequisito' => 'ICI-214',
        'posicion_x' => '4',
        'posicion_y' => '4',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-224',
        'nombre' => 'Organizacion y Manejo de Archivos',
        'creditos' => '8',
        'prerequisito' => 'ICI-215',
        'posicion_x' => '4',
        'posicion_y' => '5',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-225',
        'nombre' => 'Economia',
        'creditos' => '6',
        'posicion_x' => '4',
        'posicion_y' => '6',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-227',
        'nombre' => 'Ingles II',
        'creditos' => '4',
        'posicion_x' => '4',
        'posicion_y' => '7',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-311',
        'nombre' => 'Ecuaciones Diferenciales',
        'creditos' => '9',
        'prerequisito' => 'ICI-221',
        'posicion_x' => '5',
        'posicion_y' => '1',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-312',
        'nombre' => 'Sistemas Operativos',
        'creditos' => '10',
        'prerequisito' => 'ICI-312',
        'posicion_x' => '5',
        'posicion_y' => '3',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-313',
        'nombre' => 'Modelamiento de Datos',
        'creditos' => '10',
        'prerequisito' => 'ICI-224',
        'posicion_x' => '5',
        'posicion_y' => '5',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-314',
        'nombre' => 'Contabilidad y Costos',
        'creditos' => '10',
        'prerequisito' => 'ICI-225',
        'posicion_x' => '5',
        'posicion_y' => '6',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'MFG-113',
        'nombre' => 'Introduccion a la Fe',
        'creditos' => '8',
        'posicion_x' => '5',
        'posicion_y' => '8',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-328',
        'nombre' => 'Calculo Numerico',
        'creditos' => '8',
        'prerequisito' => 'ICI-311',
        'posicion_x' => '6',
        'posicion_y' => '1',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-329',
        'nombre' => 'Redes de Computacion',
        'creditos' => '8',
        'prerequisito' => 'ICI-312',
        'posicion_x' => '6',
        'posicion_y' => '3',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-330',
        'nombre' => 'Sistemas de Informacion I',
        'creditos' => '8',
        'prerequisito' => 'ICI-313',
        'posicion_x' => '6',
        'posicion_y' => '4',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-324',
        'nombre' => 'Bases de Datos',
        'creditos' => '8',
        'prerequisito' => 'ICI-313',
        'posicion_x' => '6',
        'posicion_y' => '5',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-325',
        'nombre' => 'Sistemas de Gestion I',
        'creditos' => '8',
        'prerequisito' => 'ICI-314',
        'posicion_x' => '6',
        'posicion_y' => '6',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'MFG-214',
        'nombre' => 'Etica Cristiana',
        'creditos' => '8',
        'prerequisito' => 'MFG-113',
        'posicion_x' => '6',
        'posicion_y' => '8',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-411',
        'nombre' => 'Inferencia Estadistica',
        'creditos' => '9',
        'prerequisito'=>'(4)',
        'posicion_x' => '7',
        'posicion_y' => '1',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-412',
        'nombre' => 'Mecanica',
        'creditos' => '9',
        'prerequisito' => 'ICI-412',
        'posicion_x' => '7',
        'posicion_y' => '2',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-416',
        'nombre' => 'Sistemas de Informacion II',
        'creditos' => '9',
        'prerequisito' => 'ICI-330',
        'posicion_x' => '7',
        'posicion_y' => '4',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-417',
        'nombre' => 'Ingenieria de Software',
        'creditos' => '8',
        'prerequisito' => 'ICI-330',
        'posicion_x' => '7',
        'posicion_y' => '5',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-415',
        'nombre' => 'Legislacion Laboral',
        'creditos' => '6',
        'prerequisito' => 'ICI-325',
        'posicion_x' => '7',
        'posicion_y' => '7',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-427',
        'nombre' => 'Matematica Discreta',
        'creditos' => '9',
        'prerequisito' => 'ICI-427',
        'posicion_x' => '8',
        'posicion_y' => '1',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-422',
        'nombre' => 'Electromagnetismo',
        'creditos' => '9',
        'prerequisito' => 'ICI-412',
        'posicion_x' => '8',
        'posicion_y' => '2',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-423',
        'nombre' => 'Investigacion de Operaciones',
        'creditos' => '8',
        'prerequisito' => '(6)',
        'posicion_x' => '8',
        'posicion_y' => '4',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-424',
        'nombre' => 'Ingenieria de Software II',
        'creditos' => '9',
        'prerequisito' => 'ICI-417',
        'posicion_x' => '8',
        'posicion_y' => '5',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-425',
        'nombre' => 'Ingenieria Economica',
        'creditos' => '6',
        'prerequisito' => 'ICI-325',
        'posicion_x' => '8',
        'posicion_y' => '6',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-426',
        'nombre' => 'Recursos y Relacion Humana',
        'creditos' => '6',
        'prerequisito' => 'ICI-415',
        'posicion_x' => '8',
        'posicion_y' => '7',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-511',
        'nombre' => 'Circuitos Digitales',
        'creditos' => '9',
        'prerequisito' => 'ICI-422',
        'posicion_x' => '9',
        'posicion_y' => '2',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-512',
        'nombre' => 'Teoria Automata',
        'creditos' => '9',
        'prerequisito' => 'ICI-427',
        'posicion_x' => '9',
        'posicion_y' => '3',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-513',
        'nombre' => 'Auditoria y Seguridad en Sistemas',
        'creditos' => '6',
        'prerequisito' => 'ICI-513, (6)',
        'posicion_x' => '9',
        'posicion_y' => '4',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-514',
        'nombre' => 'Comunicacion Hombre-Maquina',
        'creditos' => '7',
        'prerequisito' => 'ICI-424',
        'posicion_x' => '9',
        'posicion_y' => '5',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-515',
        'nombre' => 'Sistemas de Gestion II',
        'creditos' => '8',
        'prerequisito' => 'ICI-425',
        'posicion_x' => '9',
        'posicion_y' => '6',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-516',
        'nombre' => 'Evaluacion de Proyectos',
        'creditos' => '8',
        'prerequisito' => 'ICI-425',
        'posicion_x' => '9',
        'posicion_y' => '7',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-521',
        'nombre' => 'Metodos Formales',
        'creditos' => '10',
        'prerequisito' => '(8)',
        'posicion_x' => '10',
        'posicion_y' => '1',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-522',
        'nombre' => 'Analisis de Algoritmos',
        'creditos' => '10',
        'prerequisito' => 'ICI-512',
        'posicion_x' => '10',
        'posicion_y' => '3',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-524',
        'nombre' => 'Calidad y Produccion de Software',
        'creditos' => '10',
        'prerequisito' => 'ICI-516',
        'posicion_x' => '10',
        'posicion_y' => '7',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-611',
        'nombre' => 'Sistemas Distribuidos',
        'creditos' => '10',
        'prerequisito' => 'ICI-511, (6)',
        'posicion_x' => '11',
        'posicion_y' => '2',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-612',
        'nombre' => 'Inteligencia Artificial',
        'creditos' => '10',
        'prerequisito' => 'ICI-522',
        'posicion_x' => '11',
        'posicion_y' => '3',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-613',
        'nombre' => 'Computacion Grafica',
        'creditos' => '8',
        'prerequisito' => '(6)',
        'posicion_x' => '11',
        'posicion_y' => '4',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-621',
        'nombre' => 'Tesis',
        'creditos' => '30',
        'prerequisito' => '(9)',
        'posicion_x' => '12',
        'posicion_y' => '5',
        'id_malla' => 'ICI'
      ]);
      DB::table('asignaturas')->insert([
        'id_asignatura' => 'ICI-622',
        'nombre' => 'Practica Profesional',
        'creditos' => '20',
        'prerequisito' => '(9)',
        'posicion_x' => '12',
        'posicion_y' => '6',
        'id_malla' => 'ICI'
      ]);

    }
}
