<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class ActivitiesJoinTableSeeder extends Seeder {

	public function run()
	{

		$faker = Faker::create();

		foreach(range(1, 100) as $index)
		{
			ActivityJoin::create([
				'activity_id' => rand(1, 25),
				'user_id' => rand(1, 25),
			]);
		}
	}

}

