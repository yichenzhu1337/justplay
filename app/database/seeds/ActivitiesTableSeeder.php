<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;
use Carbon\Carbon;

class ActivitiesTableSeeder extends Seeder {

	public function run()
	{

		$sports_list = ['Tennis', 'Badminton', 'Table Tennis', 'Squash'];
		$location_list = ['Valley', 'Attic', 'Gym', 'Weight room', 'Teaching studio', 'TPASC'];
		
		$faker = Faker::create();

		foreach(range(1, 100) as $index)
		{

			$start_date = Carbon::now('America/Toronto')->addDays(rand(1, 3));
			$end_date = $start_date->addDays(rand(1, 2));

			Activity::create([
				'owner_id' => rand(1, 100),
				'description' => $faker->sentence(rand(10, 20)),
				'capacity' => rand(2, 20),
				'sport' => $sports_list[rand(0, 3)],
				'location' => $location_list[rand(0, 5)],
				'date_from' => $start_date, 
				'date_to' => $end_date
			]);
		}
	}

}

