<?php namespace Acme\Interfaces;


Interface ActivityRepositoryInterface {

	public function getAll();

	public function getById($id);

	public function store($input);

	public function update($id, $input);

	public function destroy($id);

	public function activitiesBetweenTodayAndTomorrow($date_from, $today, $tomorrow);

	public function getAllAuthActivities($auth_id);

}