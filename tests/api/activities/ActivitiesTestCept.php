<?php 

$I = new ApiTester($scenario);
$I->wantTo('Return all activities');

$I->sendGet('activities');

$I->seeResponseIsJson();