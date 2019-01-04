<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');


	
	DB::table('users')->truncate();

	
		DB::table('profiles')->truncate();
		DB::table('friends')->truncate();
		DB::table('activities')->truncate();
		DB::table('comments')->truncate();
		DB::table('activities_joined')->truncate();
		DB::table('notifications_friends')->truncate();
    DB::table('notifications_activities')->truncate();

		Eloquent::unguard();

	
		$this->call('UsersTableSeeder');


		$this->call('ProfileTableSeeder');

//		dd("exited");
		$this->call('FriendsTableSeeder');
		$this->call('ActivitiesTableSeeder');
		$this->call('CommentsTableSeeder');
		$this->call('ActivitiesJoinTableSeeder');
        $this->call('NotificationsFriendsTableSeeder');
        $this->call('NotificationsActivitiesTableSeeder');
	}

}
