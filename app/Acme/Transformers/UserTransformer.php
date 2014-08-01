<?php

namespace Acme\Transformers;

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

        $are_they_friends = "SELECT * FROM friends ";
        $are_they_friends .= "WHERE ";
        $are_they_friends.= "user1_id = $auth_id AND user2_id = $user_id "; 
        $are_they_friends .= "OR ";
        $are_they_friends .= "user1_id = $user_id AND user2_id = $auth_id";

        $are_they_friends_query = DB::select($are_they_friends);

        if (count($are_they_friends_query)) {
            $areFriends = true;
        }
        else{
            $areFriends = false;
        }   

		return [
			'id' => $user['id'],
            'username' => $user['username'],
            'areFriends' => $areFriends
		];
	}
}