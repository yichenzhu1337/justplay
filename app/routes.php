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

			Route::post('logout', 'AuthenticationController@logout');

		});

	});

	//Route::get('activity-paginated', 'ActivitiesController@paginated');
	
	Route::resource('users', 'UsersController');
	Route::resource('activities', 'ActivitiesController', ['only' => ['index', 'show', 'store', 'update','destroy']]);
	Route::get('activities-all-this-week', 'ActivitiesController@getAllActivitiesThisWeek');
	Route::get('activities-all-auth-this-week', 'ActivitiesController@getAllAuthActivitiesThisWeek');
	Route::get('activities-all-auth', 'ActivitiesController@getAllAuthActivities');
	Route::resource('activity-join', 'ActivityJoinController', ['only' => ['index', 'show', 'store', 'destroy']]);
	Route::resource('comments', 'CommentsController', ['only' => ['index', 'show', 'store', 'update','destroy']]);
	Route::resource('friends', 'FriendsController', ['only' => ['index', 'store','destroy']]);
	Route::post('check-if-friends', 'FriendsController@checkIfFriends');
	Route::resource('notifications', 'NotificationsController');
	Route::resource('profiles', 'ProfilesController', ['only' => ['index', 'show', 'update']]);

	Route::get('get-auth-info', 'AuthenticationController@getUserId');

});

