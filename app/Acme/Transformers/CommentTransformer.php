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

class CommentTransformer extends TransformerAbstract{

	public function transform(Comment $comment)
	{
		return [
			'id' => $comment['id'],
			'username' => User::find($comment['id'])->username,
			'activity_id' => $comment['activity_id'],
			'user_id' => $comment['user_id'],
			'description' => $comment['description'],
			'date' => substr(json_encode($comment['created_at']), 9, 19)
		];
	}

}