<?php

Route::resource('comments', 'CommentsController', ['only' => ['store', 'update', 'destroy']]);