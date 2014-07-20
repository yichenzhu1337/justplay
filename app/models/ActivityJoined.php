<?php

class ActivityJoined extends \Eloquent {

	protected $table = "activities_joined";
	// Add your validation rules here
	public static $rules = [
		// 'title' => 'required'
	];

	// Don't forget to fill this array
	protected $fillable = [];

	public function activity(){
		return $this->belongsTo('Activity');
	}
}