<?php namespace Acme\Repositories;

use Acme\Interfaces\ActivityRepositoryInterface;

use Activity;

class DbActivityRepository extends DbBaseRepository implements ActivityRepositoryInterface {

	protected $model;

	function __construct(Activity $model)
	{
		$this->model = $model;
	}

	public function store($input)
	{
		$this->model->create($input);
	}

	public function update()
	{
		return 'updates the model';
	}
	
	public function destroy()
	{
		$this->model->destroy($input);
	}
}
