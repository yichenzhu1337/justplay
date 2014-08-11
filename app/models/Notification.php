<?php

class Notification extends \Eloquent {

	// Add your validation rules here
	public static $rules = [
		// 'title' => 'required'
	];

	// Don't forget to fill this array
	protected $fillable = [
		'from_id', 
		'to_id', 
		'type', 
		'details', 
		'is_read', 
		'response', 
		'date', 
		'activity_id'
	];

}