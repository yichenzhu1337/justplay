<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class NotificationsActivitiesTableSeeder extends Seeder {

	public function run()
	{
		$faker = Faker::create();
        $sub_types = ['activity_invite', 'activity_join', 'activity_update', 'activity_delete', 'activity_comment'];

		foreach(range(1, 100) as $index)
		{
			NotificationActivity::create([
                'activity_id' => rand(1, 30),
                'sub_type' => $sub_types[rand(0, 4)],
                'from_id' => rand(1, 30),
                'to_id' => rand(1, 30),
                'details' => $faker->paragraph(rand(1, 5)),
                'is_read' => rand(0, 1)
			]);
		}
	}

}