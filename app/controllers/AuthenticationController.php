<?php

class AuthenticationController extends BaseController {

	public function __construct()
	{

	}

	public function postRegister()
	{
		try
		{
			$user = Sentry::createUser(array(
				'first_name' => Input::get('first_name'),
				'last_name' => Input::get('last_name'),
				'email' => Input::get('email'),
				'password' => Input::get('password'),
				'activated' => true,
				));

			if ($user) {
				DB::insert('insert into profiles (user_id) values (?)', array($user->id));
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
				return Response::json(
					array(
						'errors' => [],
						'obj' => array(
							'id' => $user->id,
							'first_name' => $user->first_name,
							'email' => $user->email
							)
					));
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

/*
return Response::json(
	array('object' => array(
		'errors' => [array('code' => 1, 'msg' => 'bad login'),array('code' => 2, 'msg' => 'bad pass'),3];
		)));
*/

/*
{ 
error: ["error1", "error2" ], 
obj: { ... } 
}
*/
