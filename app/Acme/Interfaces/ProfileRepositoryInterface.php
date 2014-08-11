<?php namespace Acme\Interfaces;


Interface ProfileRepositoryInterface {

	public function getAll();

	public function getById($id);

	public function show($username);
	
	public function update($user_id, $input);

}