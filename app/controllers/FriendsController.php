<?php

class FriendsController extends \BaseController {

	/**
	 * Display a listing of friends of $user_id = Auth::id();
	 *
	 * @return Response
	 */
	public function index()
	{
		$user_id = Sentry::getUser()->id;
		$all_my_friends = "SELECT * FROM friends WHERE user1_id = $user_id OR user2_id = $user_id";
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
		$stranger_id = Input::get('stranger_id');   //COUNT(*) as 

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
		$stranger_id = Input::get('stranger_id');

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

		$notification_received = "SELECT * FROM notifications ";
		$notification_received .= "WHERE ";
		$notification_received .= "from_id = $stranger_id ";
		$notification_received .= "AND ";
		$notification_received .= "to_id = $user_id ";

		$are_they_friends_query = DB::select($are_they_friends);
		$notification_sent_query = DB::select($notification_sent);
		$notification_received_query = DB::select($notification_received);

		if (count($are_they_friends_query)) {
			// these two are friends, 
			return Response::json([
				'status' => 'friends'
			]);
	
		}
		elseif ($notification_sent_query) {

			return Response::json([
				'status' => 'notification_sent'
			]);

		}
		elseif($notification_received_query){

			return Response::json([
				'status' => 'notification_received'
			]);

		}
		else{

			return Response::json([
				'status' => 'not_friends'
			]);
		}

	}

}
