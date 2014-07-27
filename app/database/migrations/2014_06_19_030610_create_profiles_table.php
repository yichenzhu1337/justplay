<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProfilesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('profiles', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('user_id')->unique();
			$table->string('first_name')->nullable();
			$table->string('last_name')->nullable(); //decide on whcih is nullable and can be empty
			$table->boolean('gender')->nullable();
			$table->text('bio')->nullable();
			$table->integer('age')->nullable();
			$table->string('email')->nullable();
			$table->string('preferences')->nullable();
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
		Schema::drop('profiles');
	}

}
