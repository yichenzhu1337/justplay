<?php namespace Acme\Transformers;

use League\Fractal;
use League\Fractal\Manager;
use League\Fractal\Resource\Item;
use League\Fractal\Resource\Collection;
use League\Fractal\TransformerAbstract;
use League\Fractal\Serializer\DataArraySerializer;
use League\Fractal\Serializer\ArraySerializer;
use League\Fractal\Serializer\JsonApiSerializer;

use Acme\Transformers\CommentTransformer;
use Acme\Transformers\ActivityJoinedTransformer;

use User;
use Activity;
use Comment;
use ActivityJoin;
use Profile;


class ActivityAscendedTransformer extends TransformerAbstract {

    public function transform(Activity $activity)
    {
        $user_id = $activity['user_id'];

        return [
            'id' => $activity['activity_id'],
            'user_id' => $user_id,
            'name' => User::find($user_id),
            'username' => Profile::find($user_id),
            'location' => $activity['location'],
            'startingtime' => $activity['date_from'],
            'endingtime' => $activity['date_to'],
            'capacity' => $activity['capacity'],
            'description' => $activity['description'],
            'sport' => $activity['sport'],
        ];
    }

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        'comments', 'activityJoined'
    ];

    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes = [
        //'comments', 'activityJoined'
    ];

    /**
     * Include Comment
     */
    public function includeComments(Activity $activity)
    {
        $comments = Comment::where('activity_id', '=', $activity['activity_id'])->get();

        return $this->collection($comments, new CommentTransformer);
    }

    /**
     * Include ActivityJoined
     */
    public function includeActivityJoined(Activity $activity)
    {
        $activityJoined = ActivityJoin::where('activity_id', '=', $activity['activity_id'])->get();

        return $this->collection($activityJoined, new ActivityJoinedTransformer);
    }

}