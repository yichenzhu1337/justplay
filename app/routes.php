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

		Route::resource('profile', 'UserProfilesController');
		Route::resource('activity', 'ActivitiesController');

		Route::group(array('before' => 'auth'), function(){
			Route::get('admin', 'AdminController@index'); //Route::resource('admin', 'AdminController');
			Route::get('logout', 'HomeController@logout');

		});

	});

});


