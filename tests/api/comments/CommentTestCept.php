<?php 

$I = new ApiTester($scenario);
$I->wantTo('create a user via API');
$I->haveHttpHeader('Content-Type', 'application/x-www-form-urlencoded');

$I->sendPOST('comments', [
	'activity_id' => 1, 
	'user_id' => 1,
	'description' => 'test description'
]);

//$I->seeResponseContains('{"result":"ok"}');