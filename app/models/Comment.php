<?php

class Comment extends \Eloquent {

	// Add your validation rules here
	public static $rules = [
		// 'title' => 'required'
	];

	// Don't forget to fill this array
	protected $fillable = ['activity_id', 'user_id', 'description'];

	public function activity(){
		return $this->belongsTo('Activity');
	}
}