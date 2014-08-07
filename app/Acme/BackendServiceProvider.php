<?php namespace Acme;

use Illuminate\Support\ServiceProvider;


class BackendServiceProvider extends ServiceProvider {

    public function register()
    {
        $this->app->bind(
            'Acme\Interfaces\ActivityRepositoryInterface', 
            'Acme\Repositories\DbActivityRepository'
        );

        $this->app->bind(
            'Acme\Interfaces\ActivityJoinRepositoryInterface', 
            'Acme\Repositories\DbActivityJoinRepository'
        );

    }

}