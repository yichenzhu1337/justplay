<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateActivitiesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('activities', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('owner_id');
			$table->text('description');
			$table->integer('capacity');
			$table->string('sport');
			$table->string('location');
			$table->dateTime('date');
			$table->dateTime('date_from');
			$table->dateTime('date_to');
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
		Schema::drop('Activities');
	}

}
