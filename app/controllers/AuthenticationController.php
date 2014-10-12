<?php

class AuthenticationController extends ApiController {

    /**
     * @return mixed
     */
    public function postRegister()
	{
		try
		{
			$input = [
				'username' => Input::get('username')
			];

            $rules = [
                'username' => 'unique:users'
            ];

            $validator = Validator::make($input, $rules);

			if ($validator->fails())
			{
                return $this->respondError('duplicate users in users database', 400);
			}
			else
            {
				$user = Sentry::createUser(array(
					'username' => Input::get('username'),
					'email' => Input::get('email'),
					'password' => Input::get('password'),
					'activated' => true,
					));

				Profile::create([
					"user_id" => $user->id,
					'name' => Input::get('name'),
					'image' => 'app/img/profile.png'
				]);
			}
		}

		catch (Cartalyst\Sentry\Users\UserExistsException $e)
		{
            return Response::json('you fucked up');
		}

	}

    /**
     * @return mixed
     */
    public function postLogin()
	{
		try
        {
            $credentials = [
                'email' => Input::get('email'),
                'password' => Input::get('password')
            ];

			$user = Sentry::authenticate($credentials, false);

			if($user)
			{
                User::with('profile')->where('id', '=', $user->id)->first();
			}

            return Response::json(['login' => 'success']);
		}
		catch (\Exception $e)
		{
            return Response::json(['login' => $e]);
		}

	}

    /**
     * @return mixed
     */
    public function logout()
	{
		Sentry::logout();
	}

}
