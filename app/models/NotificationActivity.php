<?php

class NotificationActivity extends \Eloquent {

    protected $table = 'notifications_activities';
	// Add your validation rules here
	public static $rules = [
		// 'title' => 'required'
	];

	// Don't forget to fill this array
	protected $fillable = ['activity_id', 'sub_type', 'from_id', 'to_id', 'details', 'is_read'];

}