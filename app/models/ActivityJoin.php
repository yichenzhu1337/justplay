<?php

class ActivityJoin extends \Eloquent {

	protected $table = "activities_joined";
	// Add your validation rules here
	public static $rules = [
		// 'title' => 'required'
	];

	// Don't forget to fill this array
	protected $fillable = ['user_id', 'activity_id'];

	public function activity(){
		return $this->belongsTo('Activity');
	}
}