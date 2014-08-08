<?php namespace Acme\Interfaces;

interface FriendRepositoryInterface {

	public function getAll();

	public function getById($id);
	
	public function store($input);
	
	public function destroy($auth_id, $stranger_id);

	public function getAllAuthFriends($auth_id);

	public function checkIfFriends($user_id, $stranger_id);
}