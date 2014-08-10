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
use Swagger\Annotations as SWG;

/**
 * @package
 * @category
 * @subpackage
 *
 * @SWG\Model(id="Activity",required="id, name")
 */
class ActivityTransformer extends TransformerAbstract {

    /**
     * @SWG\Property(name="id",type="integer",format="int64",description="Unique identifier for the Pet",minimum="0.0",maximum="100.0")
     */
    public $id;

    /**
     * @SWG\Property(name="name",type="string",description="Friendly name of the pet")
     */
    public $name;

    /**
     * @SWG\Property(name="category",type="Category",description="Category the pet is in")
     */
    public $category;

    /**
     * @SWG\Property(name="photoUrls",type="array",@SWG\Items("string"),description="Image URLs")
     */
    public $photos;

    /**
     * @SWG\Property(name="tags",type="array",@SWG\Items("Tag"),description="Tags assigned to this pet")
     */
    public $tags;

    /**
     * @SWG\Property(name="status",type="string",description="pet status in the store",enum="['available','pending','sold']")
     */
    public $status;

	public function transform(Activity $activity)
	{
		return [
			'activity_id' => $activity['id'],
			'owner_id' => $activity['owner_id'],
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

    // ....

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