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
use NotificationActivity;


class NotificationActivityTransformer extends TransformerAbstract
{

    public function transform(NotificationActivity $notificationActivity)
    {

        return [
            'test' => 'test'
        ];
    }

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'user'
    ];

    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes = [
        //'author'
    ];

    // ....

    /**
     * Include Author
     *
     * @return League\Fractal\ItemResource
     */
    public function includeUser()
    {
        $user = User::find(1);

        return $this->item($user, new UserTransformer);
    }

}