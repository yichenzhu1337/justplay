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
use Friend;

class FriendTransformer extends TransformerAbstract
{

    public function transform(Friend $friend)
    {

        return [
            'from_id' => $friend['from_id'],
            'from_user' => User::find($friend['from_id'])->username,
            'to_id' => $friend['to_id'],
            'to_user' => User::find($friend['to_id'])->username,
        ];
    }

}