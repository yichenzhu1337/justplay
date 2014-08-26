<?php namespace Acme\Transformers;

use League\Fractal;
use League\Fractal\Manager;
use League\Fractal\Resource\Item;
use League\Fractal\Resource\Collection;
use League\Fractal\TransformerAbstract;

use League\Fractal\Serializer\DataArraySerializer;
use League\Fractal\Serializer\ArraySerializer;
use League\Fractal\Serializer\JsonApiSerializer;

use Acme\Transformers\CommentTransformer;
use Acme\Transformers\ActivityJoinedTransformer;

use User;
use Profile;
use Activity;
use Comment;
use ActivityJoined;
use Sentry;
use DB;

class UserTransformer extends TransformerAbstract
{

	public function transform(User $user)
	{
        $auth_id = Sentry::getUser()->id;
        $user_id = $user['id'];

        // Quick fix to get friend_status instead of areFriends
        $are_they_friends = "SELECT * FROM friends ";
        $are_they_friends .= "WHERE ";
        $are_they_friends.= "user1_id = $auth_id AND user2_id = $user_id "; 
        $are_they_friends .= "OR ";
        $are_they_friends .= "user1_id = $user_id AND user2_id = $auth_id";

        $notification_sent = "SELECT * FROM notifications ";
        $notification_sent .= "WHERE ";
        $notification_sent .= "from_id = $auth_id ";
        $notification_sent .= "AND ";
        $notification_sent .= "to_id = $user_id ";

        $notification_received = "SELECT * FROM notifications ";
        $notification_received .= "WHERE ";
        $notification_received .= "from_id = $user_id ";
        $notification_received .= "AND ";
        $notification_received .= "to_id = $auth_id ";

        $are_they_friends_query = DB::select($are_they_friends);
        $notification_sent_query = DB::select($notification_sent);
        $notification_received_query = DB::select($notification_received);

        if (count($are_they_friends_query)) {
            $areFriends = 'friends';
        }
        elseif ($notification_sent_query) {
            $areFriends = 'notification_sent';
        }
        elseif ($notification_received_query){
            $areFriends = 'notification_received';
        }
        else {
            $areFriends = 'not_friends';
        }

		return [
			'id' => $user['id'],
            'name' => Profile::find($user['id'])->name,
            'username' => $user['username'],
            'areFriends' => $areFriends
		];
	}
}