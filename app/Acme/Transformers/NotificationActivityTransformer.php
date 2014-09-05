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
use NotificationActivity;

class NotificationActivityTransformer extends TransformerAbstract
{

    public function transform(NotificationActivity $notificationActivity)
    {

        return [
            'sub_type' => $notificationActivity['sub_type'],
            'from_id' => $notificationActivity['from_id'],
            'from_user' => User::find($notificationActivity['from_id'])->username,
            'to_id' => $notificationActivity['to_id'],
            'to_user' => User::find($notificationActivity['to_id'])->username,
            'details' => $notificationActivity['details']
        ];
    }

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'activity'
    ];

    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes = [
        'activity'
    ];

    // ....

    /**
     * Include Author
     *
     * @return League\Fractal\ItemResource
     */
    public function includeActivity()
    {
        $activity = Activity::find(1);

        return $this->item($activity, new ActivityTransformer);
    }

}