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

	public function home() {
/*
		$user = User::find(1);
		echo "<pre>";
		echo ($user->username);
		echo "</pre>";

		Mail::send(
			'emails.auth.test', 
			array('name' => 'Alex'), 
			function($message) {
				$message->to('yichenzhu1337@gmail.com', 'yichen')->subject('test mail');
			}
		);
*/
		return View::make('home');
	}

}
