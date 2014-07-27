<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class UsersTableSeeder extends Seeder {

	public function run()
	{
		$faker = Faker::create();

		User::create([
			"username" => "yichen",
			"email" => "yichen@yichen.com",
			"password" => Hash::make('yichen'),
			"activated" => 1,
			"first_name" => "Yi Chen",
			"last_name" => "Zhu"
		]);

		User::create([
			"username" => "jack",
			"email" => "jack@jack.com",
			"password" => Hash::make('jackjack'),
			"activated" => 1,
			"first_name" => "Jack",
			"last_name" => "Yiu"
		]);

		foreach(range(1, 30) as $index)
		{
			User::create([
				"username" => $faker->userName,
				"email" => $faker->email,
				"password" => Hash::make('password'),
				"activated" => 1,
				"first_name" => $faker->firstName($gender = null|'male'|'female'),
				"last_name" => $faker->lastName
			]);
		}
	}

}