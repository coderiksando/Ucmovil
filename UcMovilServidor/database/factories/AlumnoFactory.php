<?php

use Faker\Generator as Faker;

$factory->define(App\Alumno::class, function (Faker $faker) {
    return [
        'ano_ingreso' => $faker->date('Y-m-d', 'now'),
        'nombre' => $faker->name(),
        'ano_nacimiento' => $faker->numberBetween('1970', '2000'),
        'telefono' => $faker->e164PhoneNumber(),
        'direccion' => $faker->streetAddress(),
        'apodo' => $faker->word(),
        'id_malla' => 'ICI',
        'semestre_actual' => $faker->numberBetween('1', '12')
    ];
});
