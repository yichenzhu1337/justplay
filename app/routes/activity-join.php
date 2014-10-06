<?php

Route::resource('activity-join', 'ActivityJoinController', ['only' => ['index', 'show', 'store', 'destroy']]);