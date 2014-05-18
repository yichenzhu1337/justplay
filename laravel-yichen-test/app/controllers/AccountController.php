<?php

class AccountController extends BaseController {

	public function getSignIn(){
		return View::make('account.signin');
	}

	public function getSignOut(){
		Auth::logout();
		return Redirect::route('home');
	}

	public function postSignin(){
		$validator = Validator::make(Input::all(),
			array(
				'email' => 'required|email',
				'password' => 'required|min:6'
				)
			);

		if ($validator->fails()) {
			return Redirect::route('account-sign-in')->withErrors($validator)->withInput();
		}
		else{
			//attempt user sign in

			$auth = Auth::attempt(array(
				'email' => Input::get('email'),
				'password' => Input::get('password'),
				'active' => 1
				));

			if ($auth) {
				//redirect to intended page
				return Redirect::intended('/');
			}
			else{
				return Redirect::route('account-sign-in')->with('global', 'Email and/or dpass word wrong, have you activated your account bro?');
			}
		}
	}

	public function getCreate(){
		return View::make('account.create');
	}

	public function postCreate(){

		$validator = Validator::make(Input::all(),
			array(
				'email' => 'required|max:50|email|unique:users|',
				'username' => 'required|max:20|min:3|unique:users',
				'password' => 'required|min:6',
				'password_again' => 'required|same:password'
				)
			);

		if ($validator->fails()) {
			return Redirect::route('account-create')->withErrors($validator)->withInput();
		}
		else{
			$email = Input::get('email');
			$username = Input::get('username');
			$password = Input::get('password');
			$password_again = Input::get('password_again');

			//activation code
			$code = str_random(60);

			$create = User::create(array(
				'email' => $email, 
				'username' => $username,
				'password' => Hash::make($password),
				'code' => $code,
				'active' => 0
				));
		}

		if ($create) {
			Mail::send('emails.auth.activate', array('link' => URL::route('account-activate', $code), 'username' => $username), function($message) use ($create){
				$message->to($create->email, $create->username)->subject('Activate your account');
			});
			return Redirect::route('home')->with('global', 'your account has been created');
		}
	}

	public function getActivate($code){
		$user = User::where('code', '=', $code)->where('active', '=', 0);

		if ($user->count()) {
			$user = $user->first();

			//update the user to active state
			$user->active = 1;
			$user->code = '';

			if ($user->save()) {
				return Redirect::route('home')->with('global','you can sign in now activation compelete');
			}
		}

		return Redirect::route('home')->with('global','sorry we could nto actiavete your account');

	}
}
