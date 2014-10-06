<?php namespace Acme\Transformers;

use League\Fractal\TransformerAbstract;
use User;
use Comment;
use Profile;


class CommentTransformer extends TransformerAbstract{

	public function transform(Comment $comment)
	{
		return [
			'id' => $comment['id'],
			'username' => User::find($comment['user_id'])->username,
			'name' => Profile::find($comment['user_id'])->name,
			'profile_picture' => Profile::find($comment['user_id'])->image,
			'activity_id' => $comment['activity_id'],
			'user_id' => $comment['user_id'],
			'description' => $comment['description'],
			'date' => substr(json_encode($comment['created_at']), 9, 19)
		];
	}

}