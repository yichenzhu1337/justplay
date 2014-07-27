<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class ActivitiesTableSeeder extends Seeder {

	public function run()
	{

		$sports_list = ['tennis', 'badminton', 'table tennis', 'soccer', 'football', 'squash'];
		$location_list = ['valley', 'attic', 'gym', 'weight room', 'teaching studio', 'pan an centre'];
		
		$faker = Faker::create();

		foreach(range(1, 25) as $index)
		{
			Activity::create([
				'description' => $faker->sentence(rand(10, 20)),
				'capacity' => rand(2, 20),
				'sport' => $sports_list[rand(0,5)],
				'location' => $location_list[rand(0,5)],
				'date' => $faker->dateTime(),
				'date_from' => $faker->dateTime(), 
				'date_to' => $faker->dateTime()
			]);
		}
	}

}

