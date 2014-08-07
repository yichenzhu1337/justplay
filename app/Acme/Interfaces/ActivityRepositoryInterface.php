<?php namespace Acme\Interfaces;

Interface ActivityRepositoryInterface {

	public function getAll();

	public function getById($id);

	public function store($input);

	public function update();

}