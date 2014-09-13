<?php

class Profile extends \Eloquent {

	protected $table = "profiles";
	// Add your validation rules here
	public static $rules = [
		// 'title' => 'required'
	];

	// Don't forget to fill this array
	protected $fillable = [
				'user_id', 
				'name',
				'image',
				'gender',
				'bio',
				'age',
				'email',
				'preferences',
				'phone_number',
				'social_link'
				];
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