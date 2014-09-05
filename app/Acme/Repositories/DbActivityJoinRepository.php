<?php namespace Acme\Repositories;

use Acme\Interfaces\ActivityJoinRepositoryInterface;

use ActivityJoin;

class DbActivityJoinRepository extends DbBaseRepository implements ActivityJoinRepositoryInterface {

	protected $model;

	function __construct(ActivityJoin $model)
	{
		$this->model = $model;
	}

	public function store($input)
	{
		$this->model->create($input);
	}

	public function destroy($user_id, $activity_id)
	{
		$this->model->where('user_id', '=', $user_id)
					->where('activity_id', '=', $activity_id)
					->delete();
	}

	public function getJoinedActivites($auth_id)
	{
		return $this->model->where('user_id', '=', $auth_id)->get();
	}

    /**
     * @param $activity_id
     * @return [user_id1, user_id2, ... user_idX] of the given activity_id
     */
    public function getAllUsersInActivity($activity_id)
    {
        return $this->model->where('activity_id', '=', $activity_id)->lists('user_id');
    }
}
