<?php namespace Acme\Repositories;

use Acme\Interfaces\ActivityRepositoryInterface;

use DB;
use Activity;
use ActivityJoin;
use Sentry;
use Carbon;

class DbActivityRepository extends DbBaseRepository implements ActivityRepositoryInterface {

	protected $model;

	function __construct(Activity $model)
	{
		$this->model = $model;
	}

	public function store($input)
	{
		$this->model->create($input);
	}

	public function update($id, $input)
	{
		$this->model->find($id)->update($input);
	}
	
	public function destroy($id)
	{
		$this->model->destroy($id);
	}

	public function activitiesBetweenTodayAndTomorrow($date_from = 'date_from', $today, $tomorrow)
	{
		$activities_today = $this->model->whereBetween('date_from', [$today, $tomorrow])->get();

		return $activities_today;
	}

	public function getAllAuthActivities($auth_id)
	{
		$auth_activities = DB::table('activities')
					        ->join('activities_joined', function($join)
					        {
					            $join->on('activities.id', '=', 'activities_joined.user_id')
					                 ->where('activities_joined.user_id', '=', Sentry::getUser()->id)
					                 ->where('date_from', '>=', Carbon::now()->addDays(4))
					                 ->where('date_to', '<=', Carbon::now()->addDays(7));
					        })
					        ->get();

		return $auth_activities;
	}

}
