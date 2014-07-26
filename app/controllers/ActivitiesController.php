<?php

use Acme\Transformers\ActivityTransformer;

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

	function __construct(ActivityTransformer $activityTransformer) 
	{
		$this->activityTransformer = $activityTransformer;

		//$this->beforeFilter('auth.basic', ['on' => 'post']);
	}

	/**
	 * Display a listing of activities
	 *
	 * @return Response
	 */
	public function index()
	{
		$activities = Activity::with('comment')->with('activityJoined')->get();

		return $activities;
/*
		return $this->respond([
			'data' => $this->activityTransformer->transformCollection($activities->all())
		]);
*/
	}

	/**
	 * Store a newly created activity in storage.
	 *
	 * @return Response
	 */
	public function store()
	{

		if (! Input::get('title') or ! Input::get('body'))
		{
			return $this->setStatusCode(422)
						->respondWithError('Error validating activity'); //extract this to api controller with readble method
		}


		Activity::create(Input::all());

		return $this->respondCreated('Activity created success!');
		// return some response Response::json('success' => 'true'); 
		// one of these400 bad request failed, 403, 422 unprocessible entity
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
		$activity = Activity::find($id);

		if (!$activity) {
			return $this->respondNotFound('activity does not exist');
			//return $this->respondWithError(404, 'activity not found');
		}

		return $this->respond([
			'data' => $this->activityTransformer->transform($activity)
		]);
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

