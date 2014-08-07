<?php namespace Acme\Repositories;

abstract class DbBaseRepository {
	
	public function getById($id)
	{
		return $this->model->find($id);
	}

	public function getAll()
	{
		return $this->model->all();
	}

}