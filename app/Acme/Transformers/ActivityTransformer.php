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

use Swagger\Annotations as SWG;

/**
 * @package
 * @category
 * @subpackage
 *
 * @SWG\Model(
 *   id="Activity",
 *   required="id, owner_id, location, startingtime, endingtime, capacity, description, sport"
 * )
 */
class ActivityTransformer extends TransformerAbstract {

    /**
     * @SWG\Property(
     *   name="id",
     *   type="integer",
     *   format="int64",
     *   description="Unique identifier for the Activity.",
     *   minimum="0.0",
     *   maximum="100.0"
     * )
     */

    /**
     * @SWG\Property(
     *   name="owner_id",
     *   type="integer",
     *   format="int64",
     *   description="Unique identifier for the owner who created the Activity.",
     *   minimum="0.0",
     *   maximum="100.0"
     * )
     */

    /**
     * @SWG\Property(
     *   name="location",
     *   type="string",
     *   description="The location at which the Activity will be held at."
     * )
     */

    /**
     * @SWG\Property(
     *   name="startingtime",
     *   type="date-format",
     *   description="The starting time for the Activity."
     * )
     */

    /**
     * @SWG\Property(
     *   name="endingtime",
     *   type="date-format",
     *   description="The ending time for the Activity."
     * )
     */

    /**
     * @SWG\Property(
     *   name="capacity",
     *   type="integer",
     *   format="int64",
     *   description="The maximum participants that can join the Activity",
     *   minimum="0.0",
     *   maximum="100.0"
     * )
     */

    /**
     * @SWG\Property(
     *   name="description",
     *   type="string",
     *   description="The description of the Activity an owner makes and edits."
     * )
     */

    /**
     * @SWG\Property(
     *   name="sport",
     *   type="string",
     *   description="All the sports that can be selected when played"
     * )
     */

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

    /**
     * Include Comment
     *
     * @return League\Fractal\ItemResource
     */
    public function includeComments(Activity $activity)
    {
        $comments = Comment::where('activity_id', '=', $activity['id'])->get();

        return $this->collection($comments, new CommentTransformer);
    }

    /**
     * Include Comment
     *
     * @return League\Fractal\ItemResource
     */
    public function includeActivityJoined(Activity $activity)
    {
        $activityJoined = ActivityJoin::where('activity_id', '=', $activity['id'])->get();

        return $this->collection($activityJoined, new ActivityJoinedTransformer);
    }

}