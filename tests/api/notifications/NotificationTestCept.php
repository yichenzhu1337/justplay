<?php

$I = new ApiTester($scenario);
$I->wantTo('create send an activity invite notification to a user via API');
$I->haveHttpHeader('Content-Type', 'application/x-www-form-urlencoded');

$I->sendPOST('notifications/friend_request/null', [
    'from_id' => 1,
    'to_id' => 2,
    'details' => 'test details',
    'is_read' => 0
]);

$I->seeInDatabase('notifications_friends', [
    'sub_type' => 'want_to_accept',
    'from_id' => 1,
    'to_id' => 2,
    'details' => 'test details',
    'is_read' => 0
]);