<?php

namespace Acme\Transformers;

class ActivityTransformer extends Transformer{

	public function transform($activity)
	{
		return [
			'activity_id' => $activity['id'],
			'location' => $activity['location'],
			'start_date' => $activity['start_date'],
			'start_date' => $activity['start_date'],
			'start_date' => $activity['start_date'],
			'capacity' => $activity['capacity'],
			'description' => $activity['description']
		];
	}

}