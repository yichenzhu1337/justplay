<?php

Route::get('notifications/{request_type}', 'NotificationsController@getNotification');

Route::post('notifications/{request_type}/{activity_id}', 'NotificationsController@sendNotification');

Route::put('notifications/{request_type}/{notification_id}/{is_read}', 'NotificationsController@updateIsRead');

Route::resource('notifications', 'NotificationsController', ['only' => ['index', 'delete']]);
