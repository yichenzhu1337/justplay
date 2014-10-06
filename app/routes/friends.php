<?php

Route::group(['before' => 'auth'], function()
{
    Route::resource('friends', 'FriendsController', ['only' => ['index', 'store','destroy']]);

    Route::post('friends/check-if-friends', 'FriendsController@checkIfFriends');

});
