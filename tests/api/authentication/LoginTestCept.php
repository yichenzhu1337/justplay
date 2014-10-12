<?php 

$I = new ApiTester($scenario);
$I->wantTo('Login a user in');
$I->haveHttpHeader('Content-Type', 'application/x-www-form-urlencoded');

$I->sendPOST('login', [
	'email' => 'yichen@yichen.com',
	'password' => 'yichen'
]);

$I->seeResponseIsJson();
$I->seeResponseContainsJson(['login' => 'success']);