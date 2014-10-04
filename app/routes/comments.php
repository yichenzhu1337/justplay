<?php

Route::resource('comments', 'CommentsController', ['only' => ['show', 'store', 'update', 'destroy']]);