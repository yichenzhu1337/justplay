<?php

use Acme\Transformers\ActivityTransformer;

class ActivitiesController extends \ApiController {

	protected $activityTransformer;

	function __construct(ActivityTransformer $activityTransformer) 
	{
		$this->activityTransformer = $activityTransformer;

		$this->beforeFilter('auth.basic', ['on' => 'post']);
	}
	/**
	 * Display a listing of activities
	 *
	 * @return Response
	 */
	public function index()
	{
		$activities = Activity::with('comment')->get();

		return $this->respond([
			'data' => $this->activityTransformer->transformCollection($activities->all())
		]);

		/*
		 * Bad. WHy?
		 * 1. All is bad, returning all = slow, want paginated result
		 * 2. no way to attach meta data
		 * 3. returning everything that mimics my database structure and table, see passwords???
		 * (do not use hidden in model)
		 * 4. no way to present errors, headers or reponse codes
		 */

	}

	/**
	 * Store a newly created activity in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$validator = Validator::make($data = Input::all(), Activity::$rules);

		if ($validator->fails())
		{
			return Redirect::back()->withErrors($validator)->withInput();
		}

		Activity::create($data);

		//return Response::json('success' => 'true');
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
		$activity = Activity::findOrFail($id);

		$validator = Validator::make($data = Input::all(), Activity::$rules);

		if ($validator->fails())
		{
			return Redirect::back()->withErrors($validator)->withInput();
		}

		$activity->update($data);

		return Redirect::route('activities.index');
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

}

