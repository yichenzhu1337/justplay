<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class ProfileTableSeeder extends Seeder {

	public function run()
	{
		$faker = Faker::create();

		foreach(range(1, 32) as $index)
		{
			Profile::create([
				'user_id' => $index,
				'name' => $faker->firstName,
				'gender' => rand(0, 1),
				'bio' => $faker->paragraph(rand(2, 5)),
				'age' => rand(18, 25),
				'email' => $faker->email,
				'preferences' => $faker->paragraph(rand(2, 5)),
				'phone_number' => $faker->phoneNumber ,
				'social_link' => 'facebook.com/' . $faker->username
			]);
		}
	}

}