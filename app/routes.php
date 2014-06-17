<?php

Route::get('/', function()
{
	return View::make("index");
});

Route::get('register', 'HomeController@getRegister');
Route::get('login', 'HomeController@getLogin');

/* 	Use:
 *	url/api/login
 *	url/api/register	
 */
Route::group(array('prefix' => 'api'), function(){

	Route::group(array('before' => 'json_csrf'), function(){

		Route::post('login', 'HomeController@postLogin');
		Route::post('register', 'HomeController@postRegister');	

	});

	Route::group(array('before' => 'auth'), function(){
		Route::get('admin', 'AdminController@index'); //Route::resource('admin', 'AdminController');
		Route::get('logout', 'HomeController@logout');

	});

});


