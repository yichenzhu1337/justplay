<?php

namespace Acme\Transformers;

class CommentTransformer extends Transformer{

	public function transform($comment)
	{
		return [
			'id' => $comment['id']
		];
	}

}