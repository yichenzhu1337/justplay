<?php

class UserProfile extends \Eloquent {

	// Add your validation rules here
	public static $rules = [
		// 'title' => 'required'
	];

	// Don't forget to fill this array
	protected $fillable = [];

	/**
	 * A profile belongs to a user
	 *
	 * @return mixed
	 */
	public function user()
	{
		return $this->belongsTo('User');
	}
}