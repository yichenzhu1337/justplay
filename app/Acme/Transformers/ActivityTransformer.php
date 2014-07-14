<?php

namespace Acme\Transformers;

class ActivityTransformer extends Transformer{

	public function transform($activity)
	{
		return [
			'title' => $activity['title'],
			'body' => $activity['body'],
			'detail' => $activity['description']
		];
	}

}