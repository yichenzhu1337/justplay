<?php namespace Acme\Repositories;


class DbUserRepository extends DbBaseRepository implements UserRepositoryInterface {

    protected $model;

    function __construct(Profile $model)
    {
        $this->model = $model;
    }

}
