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
			$table->integer('user_id');
			$table->string('first_name')->nullable();
			$table->string('last_name')->nullable(); //decide on whcih is nullable and can be empty
			$table->string('gender');
			$table->string('bio');
			$table->integer('age');
			$table->string('email');
			$table->string('preferences');
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
