<?php

Route::get('users/get-auth', 'ApiController@getAuth');

Route::resource('users', 'UsersController', ['only' => ['index']]);

