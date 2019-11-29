<?php

use Faker\Generator as Faker;
use App\Asignatura;
use App\Profesore;

$factory->define(App\VersionRamo::class, function (Faker $faker) {
    return [
        'id_asignatura' => Asignatura::all()->random()->id_asignatura,
        'id_profesor' => Profesore::all()->random()->id
    ];
});
