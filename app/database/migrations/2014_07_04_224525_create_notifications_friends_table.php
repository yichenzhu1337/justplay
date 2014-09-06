<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateNotificationsFriendsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('notifications_friends', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('sub_type');
			$table->integer('from_id')->nullable();
			$table->integer('to_id')->nullabl();
			$table->string('details')->nullable();
			$table->boolean('is_read')->nullable();
			$table->timestamps();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('notifications_friends');
	}

}
