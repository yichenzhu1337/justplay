<?php namespace Acme\Transformers;

use League\Fractal;
use League\Fractal\Manager;
use League\Fractal\Resource\Item;
use League\Fractal\Resource\Collection;
use League\Fractal\TransformerAbstract;

use League\Fractal\Serializer\DataArraySerializer;
use League\Fractal\Serializer\ArraySerializer;
use League\Fractal\Serializer\JsonApiSerializer;

use Profile;


class ProfileTransformer extends TransformerAbstract
{

	public function transform(Profile $profile)
	{

		return [
			'id' => $profile['id'],
			'user_id' => $profile['user_id'],
			'name' => $profile['name']
		];

	}

}