<?php

Route::get('/', function()
{
	return View::make("index");
});

/* 	Use:
 *	url/api/login
 *	url/api/register	
 */
Route::group(array('prefix' => 'api'), function(){

	Route::group(array('before' => 'json_csrf'), function(){

		Route::post('login', 'AuthenticationController@postLogin');
		Route::post('register', 'AuthenticationController@postRegister');	


		Route::group(array('before' => 'auth'), function(){
			Route::get('admin', 'AdminController@index'); //Route::resource('admin', 'AdminController');
			Route::get('logout', 'HomeController@logout');

		});

	});

	//Route::resource('profile', 'UserProfilesController');
	Route::resource('activity', 'ActivitiesController');
	Route::resource('comment', 'UserProfilesController');
	Route::resource('friends', 'UserProfilesController');
	Route::resource('notification', 'UserProfilesController');

	Route::get('/{profile}', 'UserProfilesController@show');
});


