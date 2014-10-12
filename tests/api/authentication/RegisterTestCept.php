<?php 

$I = new ApiTester($scenario);
$I->wantTo('create a user via API');
$I->haveHttpHeader('Content-Type', 'application/x-www-form-urlencoded');

$I->sendPOST('register', [
	'username' => 'davert', 
	'email' => 'davert@codeception.com',
	'password' => 'password'
]);

$I->seeInDatabase('users', ['email' => 'davert@codeception.com']);


//$I->seeResponseCodeIs(200);
//$I->seeResponseIsJson();
//$I->seeResponseContains('{"result":"ok"}');