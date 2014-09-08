<?php namespace Acme\Transformers;

use League\Fractal;
use League\Fractal\Manager;
use League\Fractal\Resource\Item;
use League\Fractal\Resource\Collection;
use League\Fractal\TransformerAbstract;

use League\Fractal\Serializer\DataArraySerializer;
use League\Fractal\Serializer\ArraySerializer;
use League\Fractal\Serializer\JsonApiSerializer;

use User;
use Comment;
use Activity;
use ActivityJoin;
use DB;
use Profile;

class ActivityJoinedTransformer extends TransformerAbstract
{

	public function transform(ActivityJoin $activityJoined)
	{
		//abstract
		$owner_id = Activity::find($activityJoined['activity_id'])->user_id;
		$user_id = $activityJoined['user_id'];

		$are_they_friends = "SELECT * FROM friends ";
		$are_they_friends .= "WHERE ";
		$are_they_friends.= "user1_id = $owner_id AND user2_id = $user_id "; 
		$are_they_friends .= "OR ";
		$are_they_friends .= "user1_id = $user_id AND user2_id = $owner_id";

		//dd($are_they_friends);

		$are_they_friends_query = DB::select($are_they_friends);

		if (count($are_they_friends_query)) {
			$areFriends	= true;
		}
		else{
			$areFriends	= false;
		}
	
		return [
			'id' => $activityJoined['id'],
			'activity_id' => $activityJoined['activity_id'],
			'user_id' => $activityJoined['user_id'],
			'username' => User::find($activityJoined['user_id'])->username,
			'name' => Profile::find($activityJoined['user_id'])->name,
			'profile_picture' => Profile::find($activityJoined['user_id'])->image,
			'areFriends' => $areFriends
		];
	}

}