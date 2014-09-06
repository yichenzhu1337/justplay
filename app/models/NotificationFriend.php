<?php

class NotificationFriend extends \Eloquent {

    protected $table = 'notifications_friends';
	// Add your validation rules here
	public static $rules = [
		// 'title' => 'required'
	];

	// Don't forget to fill this array
	protected $fillable = [
		'sub_type',
		'from_id', 
		'to_id',
		'details', 
		'is_read'
	];

}