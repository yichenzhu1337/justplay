<?php

Route::resource('profiles', 'ProfilesController', ['only' => ['index', 'show', 'update']]);