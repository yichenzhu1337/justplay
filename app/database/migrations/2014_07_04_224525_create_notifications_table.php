<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateNotificationsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('notifications', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('from_id');
			$table->integer('to_id');
			$table->string('type');
			$table->string('details');
			$table->boolean('is_read');
			$table->boolean('response');
			$table->string('date');
			$table->integer('activity_id');
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
		Schema::drop('notifications');
	}

}
