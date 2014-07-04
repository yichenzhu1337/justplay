<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class ActivitiesTableSeeder extends Seeder {

	public function run()
	{
		$faker = Faker::create();

		foreach(range(1, 10) as $index)
		{
			Activity::create([
				'title' => $faker->word() ,
				'body' => $faker->sentence(3) ,
				'number_people' => $faker->randomDigitNotNull() ,
				'sport' => 'tennis',
				'location' => 'valley',
				'level' => $faker->randomDigit(),
				'date' => $faker->dateTimeBetween($startDate = '-30 years', $endDate = 'now') 
			]);
		}
	}

}