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

	Route::get('activity-paginated', 'ActivitiesController@paginated');
	Route::get('test', 'FriendsController@checkIfFriends');

	Route::resource('activity', 'ActivitiesController');
	Route::resource('comment', 'CommentsController');
	Route::resource('friends', 'FriendsController');
	Route::resource('notifications', 'NotificationsController');
	Route::resource('profile', 'ProfilesController');
});


