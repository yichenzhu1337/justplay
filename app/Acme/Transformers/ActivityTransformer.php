<?php namespace Acme\Transformers;

use League\Fractal\TransformerAbstract;
use User;
use Activity;
use Comment;
use ActivityJoin;
use Profile;


class ActivityTransformer extends TransformerAbstract {

	public function transform(Activity $activity)
	{
        $user_id = $activity['user_id'];

		return [
			'id' => $activity['id'],
            'user_id' => $user_id,
            'name' => User::find($user_id),
            'username' => Profile::find($user_id),
			'location' => $activity['location'],
			'startingtime' => $activity['date_from'],
			'endingtime' => $activity['date_to'],
			'capacity' => $activity['capacity'],
			'description' => $activity['description'],
            'sport' => $activity['sport'],
            'activity_id' => $activity['activity_id']
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
     *
     * @param $activity
     * @return collection
     */
    public function includeComments(Activity $activity)
    {
        $comments = Comment::where('activity_id', '=', $activity['id'])->get();

        return $this->collection($comments, new CommentTransformer);
    }

    /**
     * Include Poeple who have joined the activity
     *
     * @param $activity
     * @return collection
     */
    public function includeActivityJoined(Activity $activity)
    {
        $activityJoined = ActivityJoin::where('activity_id', '=', $activity['id'])->get();

        return $this->collection($activityJoined, new ActivityJoinedTransformer);
    }

}