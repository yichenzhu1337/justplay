<?php

use Acme\Interfaces\FriendRepositoryInterface;
use Acme\Interfaces\NotificationRepositoryInterface;


/**
 * Class FriendsController
 */
class FriendsController extends \ApiController {

    /**
     * Variables
     *
     * @var Acme\Interfaces\FriendRepositoryInterface
     * @var Acme\Interfaces\NotificationRepositoryInterface
     */
    protected $friend;
    protected $notification;

    /**
     * FriendsController Constructor
     *
     * @param FriendRepositoryInterface $friend
     * @param NotificationRepositoryInterface $notification
     */
    function __construct(FriendRepositoryInterface $friend, NotificationRepositoryInterface $notification)
	{
		$this->friend = $friend;
		$this->notification = $notification;
	}

	/**
	 * Display a listing of friends of the currently authenticated user;
	 *
	 * @return Response
	 */
	public function index()
	{
		return $this->friend->getAllAuthFriends(Sentry::getUser()->id);
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

		$this->notification->sendFriendRequest('accept_confirmed', $input['user1_id'], $input['user2_id'], $details=null);
	}

	/**
	 * Remove the friend from his personal list
     *
	 * @param int $stranger_id
	 * @return Response
	 */
	public function destroy($stranger_id)
	{
		$this->friend->destroy(Sentry::getUser()->id, $stranger_id);
	}

	/**
     * Check to see if two people are friends
     * get response that returns already friends, not friends, or friend request sent
     *
	 * @return Response
	 */
	public function checkIfFriends()
	{
		return $this->friend->checkIfFriends(Sentry::getUser()->id, Input::get('stranger_id'));
	}

}
