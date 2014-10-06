<?php namespace Acme\Repositories;

use Acme\Interfaces\ProfileRepositoryInterface;
use Profile;
use User;


class DbProfileRepository extends DbBaseRepository implements ProfileRepositoryInterface {

	protected $model;

	function __construct(Profile $model)
	{
		$this->model = $model;
	}

	public function show($username)
	{
		$profile = User::with('profile')->whereUsername($username)->firstOrFail();

		return $profile;
	}
		
	public function update($user_id, $input)
	{
		$this->model->where('user_id', '=', $user_id)->update($input);
	}

}
