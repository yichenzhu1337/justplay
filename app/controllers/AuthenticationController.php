<?php

class AuthenticationController extends \ApiController {

	public function __construct()
	{

	}
	
	public function getUserId()
	{

		if (!Sentry::check()) {
			
			return Response::json([
				'error' => [[
					'message' => 'not logged in bitch',
					'status_code' => 403 //application error code
				]]
			]);
		}

		return Response::json(
 					array(
 						'errors' => [],
 						'obj' => [
							'id' => Sentry::getUser()->id,
							'username' => Sentry::getUser()->username
						]
 					));
	}

	public function postRegister()
	{



		try
		{
			////////////////////////////////////////////////
			///need to fix
			$user = Sentry::createUser(array(
				'username' => Input::get('first_name'),
				'email' => Input::get('email'),
				'password' => Input::get('password'),
				'activated' => true,
				));

			$rules = [
				'username' => 'unique:users',
			];

			$input = [
				'username' => Input::get('first_name')
			];
			$validator = Validator::make($input, $rules);

			if ($validator->fails())
			{

				return Response::json(
					array(
						'errors' => [["message" => "username already in use"]],
						'obj' => array('faliure' => '1337')
					));

			}
			else
			{
				Profile::create([
					"user_id" => $user->id,
					'first_name' => Input::get('first_name')
				]);
			}
		}

		catch (Cartalyst\Sentry\Users\UserExistsException $e)
		{
				return Response::json(
					array(
						'errors' => [["message" => "email already in use"]],
						'obj' => array('faliure' => '1337')
					));

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
				//return 'bs';      
				//$user->with('profile')->get(); 
				//return Response::json(User::with('profile')->where('id', '=', $user->id)->get()); //what i want

				return Response::json(
 					array(
 						'errors' => [],
 						'obj' => User::with('profile')->where('id', '=', $user->id)->first()
 					));

			}

			/*
			{
			"errors":[{
				"message":"Sorry, that page does not exist",
				"code":34
				}]
			}
			*/
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

		return Response::json(
			array(
				'errors' => [],
				'obj' => ""
			));

	}

}
