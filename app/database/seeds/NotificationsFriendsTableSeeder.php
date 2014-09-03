<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class NotificationsFriendsTableSeeder extends Seeder {

	public function run()
	{
		$faker = Faker::create();

		foreach(range(1, 100) as $index)
		{
			NotificationFriend::create([
                'from_id' => rand(1, 30),
                'to_id' => rand(1, 30),
                'details' => $faker->paragraph(rand(1, 5)),
                'is_read' => rand(0, 1)
			]);
		}
	}

}