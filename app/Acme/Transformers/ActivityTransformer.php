<?php

namespace Acme\Transformers;

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
use ActivityJoined;

class ActivityTransformer extends TransformerAbstract
{
	/*
	protected $commentTransformer;
	protected $activityJoinedTransformer;

	function __construct(CommentTransformer $commentTransformer, ActivityJoinedTransformer $activityJoinedTransformer) 
	{
		$this->commentTransformer = $commentTransformer;
		$this->activityJoinedTransformer = $activityJoinedTransformer;
	}

	$activityJoined = ActivityJoined::where('activity_id', '=', $activity['id'])->get()->toArray();
	$transformActivityJoined = $this->activityJoinedTransformer->transformCollection($activityJoined);
	*/

	public function transform(Activity $activity)
	{
		return [
			'activity_id' => $activity['id'],
			'owner_id' => $activity['owner_id'],
			'location' => $activity['location'],
			'startdate' => $activity['date'],
			'startingtime' => $activity['date_from'],
			'endingtime' => $activity['date_to'],
			'capacity' => $activity['capacity'],
			'description' => $activity['description'],
            'sport' => $activity['sport']
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

    // ....

    /**
     * Include Author
     *
     * @return League\Fractal\ItemResource
     */
    public function includeComments(Activity $activity)
    {
        $comments = Comment::where('activity_id', '=', $activity['id'])->get();

        return $this->collection($comments, new CommentTransformer);
    }

    /**
     * Include Author
     *
     * @return League\Fractal\ItemResource
     */
    public function includeActivityJoined(Activity $activity)
    {
        $activityJoined = ActivityJoined::where('activity_id', '=', $activity['id'])->get();

        return $this->collection($activityJoined, new ActivityJoinedTransformer);
    }

}