<?php

Route::get('/', function()
{
	return View::make("index");
});

Route::group(array('prefix' => 'api/v1/', 'after' => 'allowOrigin'), function()
{

	foreach (File::allFiles(__DIR__.'/routes') as $partial)
	{
		require_once $partial->getPathname();
	}

});
