<?php

namespace Acme\Transformers;
use Comment;

class ActivityTransformer extends Transformer{

	public function transform($activity)
	{
		return [
			'activity_id' => $activity['id'],
			'location' => $activity['location'],
			'startdate' => $activity['date'],
			'startingtime' => $activity['date_from'],
			'endingtime' => $activity['date_to'],
			'capacity' => $activity['capacity'],
			'description' => $activity['description'],

			//'comments' => Comment::where('id', '=', $activity['id'])->get()
		];
	}

}