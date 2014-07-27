<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class ActivitiesJoinedTableSeeder extends Seeder {

	public function run()
	{

		$faker = Faker::create();

		foreach(range(1, 25) as $index)
		{
			ActivityJoined::create([
				'activity_id' => rand(1, 25),
				'user_id' => rand(1, 25),
			]);
		}
	}

}

