<?php

    $env = "db"; //p - production, d - development, db - migrate db

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
            'DB_PASSWORD' => 'root'
        ];
    }

    return [

        'default' => 'mysql',

        'connections' => [

            'mysql' => [
                'driver'    => 'mysql',
            'host'      => '104.236.229.36',
            'database'  => 'forge',
            'username'  => 'forge',
            'password'  => 'ZVHydjdIJOZwZGlai54u',
                'charset'   => 'utf8',
                'collation' => 'utf8_unicode_ci',
                'prefix'    => '',
            ]

        ],

    ];
