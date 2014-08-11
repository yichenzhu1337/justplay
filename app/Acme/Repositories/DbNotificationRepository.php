<?php namespace Acme\Repositories;

use Acme\Interfaces\NotificationRepositoryInterface;

use Notification;

class DbNotificationRepository extends DbBaseRepository implements NotificationRepositoryInterface {

	protected $model;

	function __construct(Notification $model)
	{
		$this->model = $model;
	}

	public function delete($id)
	{
		$this->model->destroy($id);
	}

	public function store($input)
	{
		$this->model->create($input);
	}

	public function getAllAuthNotifications($auth_id)
	{
		$this->model->where('to_id', '=', $auth_id)->get();
	}

}
