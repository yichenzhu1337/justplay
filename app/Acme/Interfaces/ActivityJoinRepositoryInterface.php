<?php namespace Acme\Interfaces;


Interface ActivityJoinRepositoryInterface {

	public function getAll();

	public function getById($id);

	public function store($input);

	public function destroy($user_id, $activity_id);

	public function getJoinedActivites($auth_id);

    public function getAllUsersInActivity($activity_id);

}