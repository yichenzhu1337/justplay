<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/
/*
Route::get('/', function()
{
	return View::make('hello');
});
*/

Route::get('/', array(
	'as' => 'home',
	'uses' => 'HomeController@home'
));

//AUTHENTICATED group

Route::group(array('before' => 'auth'), function(){
	//sign out get
	Route::get('/account/sign-out', array(
		'as' => 'account-sign-out',
		'uses' => 'AccountController@getSignOut'
		));
});

//unauthenticated group
Route::group(array('before' => 'guest'), function(){

	//csrf protection group
	Route::group(array('before' => 'csrf'), function(){

		// create account post
		Route::post('/account/create', array(
			'as' => 'account-create-post',
			'uses' => 'AccountController@postCreate',
		));

		// sign in post
		Route::post('/account/sign-in', array(
		'as' => 'account-sign-in-post',
		'uses' => 'AccountController@postSignIn'
	));
	});

	// sign in get
	Route::get('/account/sign-in', array(
		'as' => 'account-sign-in',
		'uses' => 'AccountController@getSignin'
	));

	// create account get
	Route::get('/account/create', array(
		'as' => 'account-create',
		'uses' => 'AccountController@getCreate',
	));

	// activate account url
	Route::get('account/activate/{code}', array(
		'as' => 'account-activate',
		'uses' => 'AccountController@getActivate'
	));

});


//can see where things are going to very easily but more code invovlded
//Route::controller('account', 'AccountController')