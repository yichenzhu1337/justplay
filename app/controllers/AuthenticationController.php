<?php

class AuthenticationController extends BaseController {

	public function __construct()
	{

	}
	
	public function getUserId()
	{
		return Sentry::getUser()->id;
	}

	public function postRegister()
	{
		try
		{
			$user = Sentry::createUser(array(
				'username' => Input::get('username'),
				'email' => Input::get('email'),
				'password' => Input::get('password'),
				'activated' => true,
				));

			if ($user) {
				//DB::insert('insert into profiles (user_id) values (?)', array($user->id));
				Profile::create(["user_id" => $user->id]);
			}

			return Response::json(
				array(
					'errors' => [],
					'obj' => array('success' => true)
				));
		}

		catch (Cartalyst\Sentry\Users\UserExistsException $e)
		{
			return 'Error in inserting user to the database:'+e;
		}
	}

	public function postLogin()
	{
		$credentials = array(
			'email' => Input::get('email'),
			'password' => Input::get('password')
			);

		try{

			$user = Sentry::authenticate($credentials, false);

			if($user)
			{
				return $user->with('profile')->get();
			}

		}
		catch (\Exception $e)
		{

			return Response::json(array(
					'login' => $e
					));
		}

	}

	public function logout()
	{
		Sentry::logout();
	}

}
