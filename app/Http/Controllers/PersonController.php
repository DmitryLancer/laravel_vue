<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PersonController extends Controller
{

    public function __invoke()
    {
        $persons = [
            [
                'id' => 1,
                'name' => 'Ivan',
                'age' => 20,
                'job' => 'rab',
            ],
            [
                'id' => 2,
                'name' => 'Катя',
                'age' => 26,
                'job' => 'лохушка',
            ],
            [
                'id' => 3,
                'name' => 'Вася',
                'age' => 43,
                'job' => 'король',
            ],
        ];
        return $persons;
    }




}
