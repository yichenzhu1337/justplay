<?php namespace Acme\Interfaces;


Interface NotificationRepositoryInterface {

	public function getAll();
	
	public function store($input);

	public function delete($id);

	public function getAllAuthNotifications($auth_id);

    public function sendFriendRequest($from_id, $to_id, $details);

    public function sendActivityInviteRequest($from_id, $to_id, $activity_id, $details);

    public function sendCommentNotification($from_id, $to_id, $activity_id, $details);

}