<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateActivitiesViewsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        $last_month = Carbon::now()->subWeeks(3);

        DB::statement("
            CREATE VIEW activities_view AS
            SELECT * FROM activities
            WHERE date_from > '$last_month'
            ORDER BY date_from DESC
        ");
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
        DB::statement("DROP VIEW activities_view");
	}

}
