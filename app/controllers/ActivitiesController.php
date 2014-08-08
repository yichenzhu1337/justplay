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

use Acme\Interfaces\ActivityRepositoryInterface;

class ActivitiesController extends \ApiController {

	protected $activityTransformer;

	function __construct(ActivityRepositoryInterface $activity) 
	{
		$this->activity = $activity;
	}

	/**
	 * Display a listing of activities
	 *
	 * @return Response
	 */
	public function index()
	{
		return $this->activity->getAll();
	}
		
	/**
	 * Display the specified activity.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$activity = $this->activity->getById($id);

		if (!$activity) {
			return $this->respondNotFound('activity does not exist');
		}
		
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
	public function store()
	{
		$this->activity->store(Input::all());
	}

	/**
	 * Update the specified activity in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$data = Input::all();

		$this->activity->update($id, $data);
	}

	/**
	 * Remove the specified activity from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$this->activity->destroy($id);
	}
	
	public function getAllActivitiesThisWeek()
	{
		$fractal = new Manager();
		$fractal->setSerializer(new ArraySerializer());

		if (isset($_GET['include'])) {
		    $fractal->parseIncludes($_GET['include']);
		}

		$activities_array = [];
		$current_layer = [];
		$final_activities = [];

		for ($i = 0; $i < 7; $i++) { 

			$today = Carbon::now('America/Toronto')->addDays($i)->toDateTimeString();
			$tomorrow = Carbon::now('America/Toronto')->addDays($i + 1)->toDateTimeString();

			$activities_today = $this->activity->activitiesBetweenTodayAndTomorrow('date_from', $today, $tomorrow);

			$resource = new Collection($activities_today, new ActivityTransformer);
			$array = $fractal->createData($resource)->toArray();

			array_push($current_layer, $today);
			array_push($current_layer, (object) ['obj' => $array]);
			array_push($final_activities, $current_layer);

			$current_layer = [];

		}

		return Response::json($final_activities);	
	}

	public function getAllAuthActivitiesThisWeek()
	{	
		$auth_id = Sentry::getUser()->id;
		$fractal = new Manager();
		$fractal->setSerializer(new ArraySerializer());

		if (isset($_GET['include'])) {
		    $fractal->parseIncludes($_GET['include']);
		}

		$activities_array = [];
		$current_layer = [];
		$final_activities = [];

		for ($i = 0; $i < 7; $i++) { 

			$today = Carbon::now('America/Toronto')->addDays($i)->toDateTimeString();
			$tomorrow = Carbon::now('America/Toronto')->addDays($i + 1)->toDateTimeString();

			$activities_today = Activity::join('activities_joined', function($join) use ($i, $auth_id) {
	      									$join->on('activities.id', '=', 'activities_joined.activity_id')
	      						 				 ->where('activities_joined.user_id', '=', $auth_id)
								                 ->where('date_from', '>=', Carbon::now()->addDays($i))
								                 ->where('date_to', '<=', Carbon::now()->addDays($i + 1));
	    									})->get();
			/*
			$activities_today = DB::table('activities')
					        ->join('activities_joined', function($join) use ($i, $auth_id)
					        {
					            $join->on('activities.id', '=', 'activities_joined.user_id')
					                 ->where('activities_joined.user_id', '=', $auth_id)
					                 ->where('date_from', '>=', Carbon::now()->addDays($i))
					                 ->where('date_to', '<=', Carbon::now()->addDays($i + 1));
					        })
					        ->get();
			*/

			$resource = new Collection($activities_today, new ActivityTransformer);
			$array = $fractal->createData($resource)->toArray();

			array_push($current_layer, $today);
			array_push($current_layer, (object) ['obj' => $array]);
			array_push($final_activities, $current_layer);

			$current_layer = [];

		}

		return Response::json($final_activities);	

	}

	public function getAllAuthActivities()
	{
		$activities_today = Activity::join('activities_joined', function($join) {
	      					$join->on('activities.id', '=', 'activities_joined.activity_id')
	      						 ->where('activities_joined.user_id', '=', Sentry::getUser()->id);
	    				})->get();

	   // $d = Activity::join('activity_join', 'activity.id', '=','activity_join.id')
		//					->select('activity_join.*','modules.module_name')
			//				->get‌​(); 				
		return $activities_today;
	}

}

