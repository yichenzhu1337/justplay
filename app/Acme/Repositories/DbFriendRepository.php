<?php namespace Acme\Repositories;

use Acme\Interfaces\FriendRepositoryInterface;

use Friend;
use DB;
use Response;

class DbFriendRepository extends DbBaseRepository implements FriendRepositoryInterface {

	protected $model;

	function __construct(Friend $model)
	{
		$this->model = $model;
	}

	public function store($input)
	{
		$this->model->create($input);
	}

	public function destroy($auth_id, $stranger_id)
	{
		$are_they_friends = "SELECT id FROM friends ";
		$are_they_friends .= "WHERE ";
		$are_they_friends.= "user1_id = $auth_id AND user2_id = $stranger_id "; 
		$are_they_friends .= "OR ";
		$are_they_friends .= "user1_id = $stranger_id AND user2_id = $auth_id";
		$are_they_friends_query = DB::select($are_they_friends);

		$this->model->destroy($are_they_friends_query[0]->id);
	}

	public function getAllAuthFriends($auth_id)
	{
		$all_my_friends = $this->model->where('user1_id', '=', $auth_id)
									  ->orWhere('user2_id', '=', $auth_id)
									  ->get();

		return $all_my_friends;		
	}

	public function checkIfFriends($user_id, $stranger_id)
	{
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
			return Response::json(
				array(
					'errors' => [],
					'obj' => ['status' => 'friends']
				));
		}
		elseif ($notification_sent_query) {
			return Response::json(
				array(
					'errors' => [],
					'obj' => ['status' => 'notification_sent']
				));
		}
		elseif ($notification_received_query){
			return Response::json(
				array(
					'errors' => [],
					'obj' => ['status' => 'notification_received']
				));
		}
		else {
			return Response::json(
				array(
					'errors' => [],
					'obj' => ['status' => 'not_friends']
				));
		}
	}

}	
