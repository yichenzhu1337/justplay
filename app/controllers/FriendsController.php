<?php

use Acme\Interfaces\FriendRepositoryInterface;


class FriendsController extends \BaseController {

	protected $friend;

	function __construct(FriendRepositoryInterface $friend)
	{
		$this->friend = $friend;
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
		//data = {from_id = , to_id = }
		$data = Input::all();

		Friend::create($data);
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
