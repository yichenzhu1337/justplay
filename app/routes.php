<?php

Route::get('/', function()
{
	return View::make("index");
});

Route::group(array('prefix' => 'api'), function(){

	Route::group(array('before' => 'json_csrf'), function(){

		Route::post('login', 'AuthenticationController@postLogin');
		Route::post('register', 'AuthenticationController@postRegister');	

		Route::group(array('before' => 'auth'), function(){

			Route::get('joinActivity', 'ActivitiesController@joinActivity');
			Route::post('logout', 'AuthenticationController@logout');

		});

	});

	//Route::get('activity-paginated', 'ActivitiesController@paginated');
	Route::get('test', 'FriendsController@checkIfFriends');

	Route::resource('activities', 'ActivitiesController');
	Route::resource('comments', 'CommentsController');
	Route::resource('friends', 'FriendsController');
	Route::resource('notifications', 'NotificationsController');
	Route::resource('profiles', 'ProfilesController');

	Route::get('getUserId', 'AuthenticationController@get_user_id');
});


