<?php namespace Acme\Interfaces;


Interface NotificationRepositoryInterface {

	public function getAll();
	
	public function store($input);

	public function delete($id);

	public function getAllAuthNotifications($auth_id);

}