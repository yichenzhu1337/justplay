<?php

use Acme\Interfaces\FriendRepositoryInterface;
use Acme\Interfaces\NotificationRepositoryInterface;


class FriendsController extends \BaseController {

	protected $friend;
	protected $notification;

	function __construct(FriendRepositoryInterface $friend, NotificationRepositoryInterface $notification)
	{
		$this->friend = $friend;
		$this->notification = $notification;
	}

	/**
	 * Display a listing of friends of $user_id = Auth::id();
	 *
	 * @return Response
	 */
	public function index()
	{
		$auth_id = Sentry::getUser()->id;
		$this->friend->getAllAuthFriends($auth_id);

		return $this->friend->getAllAuthFriends($auth_id);
	}

	/**
	 * Store a newly created friend in storage.
	 * adds friend iff the notification request is a yes
	 * @return Response
	 */
	public function store()
	{
		$input = Input::only('user1_id', 'user2_id', 'sub_type');

		$this->friend->store($input);

		$this->notification->deleteFriendNotification($input['user1_id'], $input['user2_id']);

		$this->notification->sendFriendRequest('accept_confirmed', $input['user2_id'], $input['user1_id'], $details=null);
	}

	/**
	 * Remove the specified friend from storage.
	 * deletes friend from his personal list
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($stranger_id)
	{
		$auth_id = Sentry::getUser()->id;

		$this->friend->destroy($auth_id, $stranger_id);
	}

	/**
	 * Remove the specified friend from storage.
	 * deletes friend from his personal list
	 * @param  int  $id
	 * @return Response   get response that returns already friends, not friends, or friend request sent
	 */
	public function checkIfFriends()
	{	
		$user_id = Sentry::getUser()->id;
		$stranger_id = Input::get('stranger_id');
		
		return $this->friend->checkIfFriends($user_id, $stranger_id);
	}

}
