<?php namespace Acme\Interfaces;


Interface CommentRepositoryInterface {

	public function getAll();

	public function getById($id);
	
	public function store($input);
	
	public function delete($id);

}