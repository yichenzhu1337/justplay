<?php

class NotificationComment extends \Eloquent {

    protected $table = 'notifications_comments';

	// Add your validation rules here
	public static $rules = [
		// 'title' => 'required'
	];

	// Don't forget to fill this array
	protected $fillable = ['activity_id', 'from_id', 'to_id', 'details'];

}