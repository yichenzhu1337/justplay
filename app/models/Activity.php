<?php

class Activity extends \Eloquent {

	// Add your validation rules here
	public static $rules = [
		// 'title' => 'required'
	];

	// Don't forget to fill this array
	protected $fillable = ['description', 'capacity', 'sport', 'location', 'date', 'date_from', 'date_to'];

	public function comment(){
		return $this->hasMany('Comment');
	}

	public function activityJoined(){
		return $this->hasMany('ActivityJoined');
	}
}