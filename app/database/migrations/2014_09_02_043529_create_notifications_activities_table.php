<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateNotificationsActivitiesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('notifications_activities', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('activity_id')->unsigned()->nullable();
            $table->string('sub_type');
			$table->integer('from_id');
			$table->integer('to_id');
            $table->string('details');
            $table->boolean('is_read');
			$table->timestamps();

            $table->foreign('activity_id')->references('id')->on('activities')->onDelete('cascade');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('notifications_activities');
	}

}
