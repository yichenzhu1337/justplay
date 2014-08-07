<?php

use Acme\Interfaces\ActivityJoinRepositoryInterface;


class ActivityJoinController extends \BaseController {

	protected $activityJoin;

	function __construct(ActivityJoinRepositoryInterface $activityJoin)
	{
		$this->activityJoin = $activityJoin;
	}

	public function index()
	{
		return $this->activityJoin->getAll();
	}

	public function show($id)
	{
		return $this->activityJoin->getById($id);
	}

	public function store()
	{
		$user_id = Sentry::getUser()->id;
		$activity_id = Input::get('activity_id');

		$input = [
			'user_id' => $user_id, 
			'activity_id' => $activity_id
		];

		$this->activityJoin->store($input);
	}

	public function destroy($activity_id)
	{
		$user_id = Sentry::getUser()->id;
		$this->activityJoin->destroy($user_id, $activity_id);
	}

}
