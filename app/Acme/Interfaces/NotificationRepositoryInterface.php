<?php namespace Acme\Interfaces;


Interface NotificationRepositoryInterface {

    /**
     * CRUD
     */
	public function getAll();
	
	public function store($input);

	public function delete($id);

	public function getAllAuthNotifications($auth_id);

    /**
     * Non-Trigger/Deliberate notifications
     */
    public function sendFriendRequest($from_id, $to_id, $details);

    public function sendActivityInviteRequest($from_id, $to_id, $activity_id, $details);

    /**
     * Trigger notifications
     */
    public function sendActivityNotification($sub_type, $from_id, $to_id, $activity_id, $details);


    /**
     * GET
     */
    public function getAllAuthFriendNotifications($user_id);

    public function getAllAuthActivityNotifications($user_id);

}