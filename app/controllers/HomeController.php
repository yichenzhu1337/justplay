<?php

class HomeController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| Default Home Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('/', 'HomeController@showWelcome');
	|
	*/

	public function showWelcome()
	{
		return View::make('index');
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
						'obj' => array('first_name' => $user->first_name)
					));
			}

		}
		catch (\Exception $e)
		{

			return Response::json(array(
					'login' => $e
					));
			/*
			return Response::json(
				array('object' => array(
					'errors' => [array('code' => 1, 'msg' => 'bad login'),array('code' => 2, 'msg' => 'bad pass'),3];
					)));
			*/
		}

	}

	public function logout()
	{
		Sentry::logout();
		return Redirect::to('/');
	}

}


/*
{ error: ["error1", "error2" ], obj: { ... } }
*/
