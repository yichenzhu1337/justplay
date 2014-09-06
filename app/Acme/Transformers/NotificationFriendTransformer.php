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
use Activity;
use NotificationFriend;


class NotificationFriendTransformer extends TransformerAbstract
{

	public function transform(NotificationFriend $notificationFriend)
	{

	  return [
	  		'sub_type' => $notificationFriend['sub_type'],
	      'from_id' => $notificationFriend['from_id'],
	      'from_user' => User::find($notificationFriend['from_id'])->username,
	      'to_id' => $notificationFriend['to_id'],
	      'to_user' => User::find($notificationFriend['to_id'])->username,
	      'create_at' => substr(json_encode($notificationFriend['created_at']), 9, 19)
	  ];

	}

}