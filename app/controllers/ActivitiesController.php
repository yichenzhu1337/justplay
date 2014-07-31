<?php

use League\Fractal;
use League\Fractal\Manager;
use League\Fractal\Resource\Item;
use League\Fractal\Resource\Collection;
use League\Fractal\TransformerAbstract;

use League\Fractal\Serializer\DataArraySerializer;
use League\Fractal\Serializer\ArraySerializer;
use League\Fractal\Serializer\JsonApiSerializer;

use Acme\Transformers\ActivityTransformer;
use Acme\Transformer\PostTransformer;
use Acme\Transformer\UserTransformer;

class ActivitiesController extends \ApiController {

   /**
	 * Bad. WHy?
	 * 1. All is bad, returning all = slow, want paginated result
	 * 2. no way to attach meta data
	 * 3. returning everything that mimics my database structure and table, see passwords???
	 * (do not use hidden in model)
	 * 4. no way to present errors, headers or reponse codes
	 */

	protected $activityTransformer;

	function __construct(Activity $activity, ActivityTransformer $activityTransformer ) 
	{
		$this->activity = $activity;
		$this->activityTransformer = $activityTransformer;
	}

	/**
	 * Display a listing of activities
	 *
	 * @return Response
	 */
	public function index()
	{
		/*
		$activities = Activity::with('comment')->with('activityJoined')->get();
		
		return $this->respond([
			'data' => $this->activityTransformer->transformCollection($activities->all())
		]);
		*/

		$fractal = new Manager();
		$fractal->setSerializer(new ArraySerializer());

		if (isset($_GET['include'])) {
		    $fractal->parseIncludes($_GET['include']);
		}

		$activities_array = [];
		$current_layer = [];
		$final_activities = [];

		for ($i = 0; $i < 7; $i++) { 
			$thisWeek = Carbon::now('America/Toronto')->subDays($i)->toDateTimeString();

			$sql = "SELECT * FROM activities WHERE date_from >= '$thisWeek'";
			//$activities = DB::select($sql);
			$activities = Activity::where('date_from', '>=', $thisWeek)->get();
			//$activities = $this->activity->all();
			$resource = new Collection($activities, new ActivityTransformer);
			$array = $fractal->createData($resource)->toArray();

			array_push($current_layer, $thisWeek);
			array_push($current_layer, (object) ['obj' => $array]);
			array_push($final_activities, $current_layer);

			$current_layer = [];

		}

		return Response::json($final_activities);

	}

	/**
	 * Store a newly created activity in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
/*
		if (! Input::get('title') or ! Input::get('body'))
		{
			return $this->setStatusCode(422)
						->respondWithError('Error validating activity'); //extract this to api controller with readble method
		}
*/
		Activity::create(Input::all());

		// return $this->respondCreated('Activity created success!');
		// return some response Response::json('success' => 'true'); 
		// one of these 400 bad request failed, 403, 422 unprocessible entity
		// message
	}

	/**
	 * Display the specified activity.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		/*
		$activity = Activity::find($id);

		if (!$activity) {
			return $this->respondNotFound('activity does not exist');
		}
		
		//$test = Activity::with('comment')->where('id', '=', $id)->with('activityJoined')->get();

		return $this->respond([
			'obj' => [$this->activityTransformer->transform($activity)]
		]);
		*/

		$activity = Activity::findOrFail($id);

		$fractal = new Manager();
		$fractal->setSerializer(new DataArraySerializer());

		if (isset($_GET['include'])) {
		    $fractal->parseIncludes($_GET['include']);
		}

		$resource = new Item($activity, new ActivityTransformer);
		$array = $fractal->createData($resource)->toArray();

		return Response::json($array);
	}

	/**
	 * Update the specified activity in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$activity = Activity::find($id);

		$data = Input::all();

		$activity->update($data);

	}

	/**
	 * Remove the specified activity from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		Activity::destroy($id);
	}

	public function paginated()
	{
		//activity-paginated?limit=6
		$limit = Input::get('limit') ?: 3;
		$activities = Activity::paginate($limit);

		return $this->respondWithPagination($activities,[
			'data' => $this->activityTransformer->transformCollection($activities->all()),
			]);
	}

	public function joinActivity()
	{
		// post request

		$user_id = Sentry::getUser()->id;
		$activity_id = Input::get('activity_id');

		ActivityJoined::create($user_id, $activity_id);
	}

}

