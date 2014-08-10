<?php

Route::group(array('before' => 'json_csrf'), function()
{

	Route::post('login', 'AuthenticationController@postLogin');
	Route::post('register', 'AuthenticationController@postRegister');	

	Route::group(array('before' => 'auth'), function()
	{
		Route::post('logout', 'AuthenticationController@logout');
	});

});