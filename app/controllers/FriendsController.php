<?php

class FriendsController extends \BaseController {

	/**
	 * Display a listing of friends of $user_id = Auth::id();
	 *
	 * @return Response
	 */
	public function index()
	{

		$all_my_friends = "SELECT * FROM friends WHERE user_id_one = $user_id OR user_id_two = $user_id";
		$result = DB::select($all_my_friends);

		return $result;
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
	public function destroy()
	{
		$user_id = Sentry::getUser()->id;
		$stranger_id = 2; //Input::get('stranger_id')    //COUNT(*) as 

		$are_they_friends = "SELECT id FROM friends ";
		$are_they_friends .= "WHERE ";
		$are_they_friends.= "user1_id = $user_id AND user2_id = $stranger_id "; 
		$are_they_friends .= "OR ";
		$are_they_friends .= "user1_id = $stranger_id AND user2_id = $user_id";

		$are_they_friends_query = DB::select($are_they_friends);
		Friend::destroy($are_they_friends_query);
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
		$stranger_id = 2; //Input::get('stranger_id')    //COUNT(*) as 

		$are_they_friends = "SELECT * FROM friends ";
		$are_they_friends .= "WHERE ";
		$are_they_friends.= "user1_id = $user_id AND user2_id = $stranger_id "; 
		$are_they_friends .= "OR ";
		$are_they_friends .= "user1_id = $stranger_id AND user2_id = $user_id";

		$notification_sent = "SELECT * FROM notifications ";
		$notification_sent .= "WHERE ";
		$notification_sent .= "from_id = $user_id ";
		$notification_sent .= "AND ";
		$notification_sent .= "to_id = $stranger_id ";

		$are_they_friends_query = DB::select($are_they_friends);
		$notification_sent_query = DB::select($notification_sent);

		if (count($are_they_friends_query)) {
			return 'true of they are friends';
		}
		elseif ($notification_sent_query) {
			return 'notification is already sent';
		}
		else{
			return 'they are not friends, add them here';
		}

		// return {friends: true, notificationsent, false}
	}

}
