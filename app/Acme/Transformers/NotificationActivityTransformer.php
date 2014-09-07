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
use Profile;
use Activity;
use NotificationActivity;

use Acme\Transformers\ProfileTransformer;


class NotificationActivityTransformer extends TransformerAbstract
{

    public function transform(NotificationActivity $notificationActivity)
    {

        return [
            'id' => $notificationActivity['id'],
            'sub_type' => $notificationActivity['sub_type'],
            'from_id' => $notificationActivity['from_id'],
            'from_user' => User::find($notificationActivity['from_id'])->username,
            'to_id' => $notificationActivity['to_id'],
            'to_user' => User::find($notificationActivity['to_id'])->username,
            'details' => $notificationActivity['details'],
            'created_at' => substr(json_encode($notificationActivity['created_at']), 9, 19),
            'is_read' => $notificationActivity['is_read']
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
        'activity', 'profile'
    ];

    /**
     * Include activity
     *
     * @return League\Fractal\ItemResource
     */
    public function includeActivity(NotificationActivity $notificationActivity)
    {
        $activity = Activity::where('id', '=', $notificationActivity['activity_id'])->get();

        return $this->collection($activity, new ActivityTransformer);
    }

    /**
     * Include profile
     *
     * @return League\Fractal\ItemResource
     */
    public function includeProfile(NotificationActivity $notificationActivity)
    {
        $profile = Profile::where('id', '=', $notificationActivity['from_id'])->get();

        return $this->collection($profile, new ProfileTransformer);
    }

}