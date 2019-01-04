<?php

//$env = "db"; //p - production, d - development, db - migrate db
$env = "other";



    if($env == "p")
    {
        $ENV =[
            'DB_HOST' => getenv('DB_HOST'),
            'DB_NAME' => getenv('DB_NAME'),
            'DB_USERNAME' => getenv('DB_USERNAME'),
            'DB_PASSWORD' => getenv('DB_PASSWORD')
        ];
    }
    elseif ($env == "db")
    {
        $ENV =[
            'DB_HOST' => '107.170.174.220',
            'DB_NAME' => 'justplay',
            'DB_USERNAME' => 'forge',
            'DB_PASSWORD' => 'bRUcUvVJfVIH9KmnpqdT'
        ];
    }
    else
    {
        $ENV =[
            'DB_HOST' => 'localhost',
            'DB_NAME' => 'justplay',
            'DB_USERNAME' => 'root',
            'DB_PASSWORD' => 'rootroot'
        ];
    }



        $application_env_variables = [
            'DB_HOST' => 'localhost',
            'DB_NAME' => 'justplay',
            'DB_USERNAME' => 'root',
            'DB_PASSWORD' => 'rootroot'
        ];
    return [

        'default' => 'mysql',

        'connections' => [

            'mysql' => [
                'driver'    => 'mysql',
                'host'      => $application_env_variables['DB_HOST'],
                'database'  => $application_env_variables['DB_NAME'],
                'username'  => $application_env_variables['DB_USERNAME'],
                'password'  => $application_env_variables['DB_PASSWORD'],
                'charset'   => 'utf8',
                'collation' => 'utf8_unicode_ci',
		'prefix'    => '',
		'strict' => false,
            ]

    ],

];


