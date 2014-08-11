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
			$table->integer('from_id')->nullable();
			$table->integer('to_id')->nullabl();
			$table->string('type')->nullable();
			$table->string('details')->nullable();
			$table->boolean('is_read')->nullable();
			$table->boolean('response')->nullable();
			$table->string('date')->nullable();
			$table->integer('activity_id')->nullable();
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
