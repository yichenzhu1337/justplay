<?php namespace Acme\Interfaces;

interface ActivityJoinRepositoryInterface {
	
	public function getAll();

	public function getById($id);

	public function store($input);

	public function destroy($user_id, $activity_id);

}