<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class FriendsTableSeeder extends Seeder {

	public function run()
	{
		$faker = Faker::create();

		foreach(range(1, 25) as $index)
		{
			Friend::create([
				'user1_id' => rand(1, 25),
				'user2_id' => rand(1, 25)
			]);
		}
	}

}