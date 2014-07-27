<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{

		DB::table('users')->truncate();
		DB::table('profiles')->truncate();
		DB::table('friends')->truncate();
		DB::table('activities')->truncate();
		DB::table('comments')->truncate();
		DB::table('activities_joined')->truncate();
		DB::table('notifications')->truncate();

		Eloquent::unguard();

		$this->call('UsersTableSeeder');
		$this->call('ProfileTableSeeder');
		$this->call('FriendsTableSeeder');
		$this->call('ActivitiesTableSeeder');
		$this->call('CommentsTableSeeder');
		$this->call('ActivitiesJoinedTableSeeder');
	}

}
