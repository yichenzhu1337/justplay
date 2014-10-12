<?php

Route::get('activities/activities-all-hosted', 'ActivitiesController@getAllAuthHostedActivities');

Route::get('activities/activities-all-auth', 'ActivitiesController@getAllAuthActivities'); //


Route::get('activities/user_id/{user_id}/weeks/{number_of}', 'ActivitiesController@activities');
//getAllActivitiesThisWeek


Route::get('activities/activities-all-auth-this-week', 'ActivitiesController@getAllAuthActivitiesThisWeek'); //

Route::resource('activities', 'ActivitiesController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);



/*


activities/{user_id}/weeks_before/{number_of}/now/weeks_after/{number_of}



activities?user_id='user_id'&weeks_before={number_of}&weeks_after={number_of}

*/