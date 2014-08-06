<?php

class ProfilesController extends \BaseController {

	/**
	 * Display a listing of userprofiles
	 *
	 * @return Response
	 */
	public function index()
	{
		$profiles = User::with('profile')->get();

		return Response::json($profiles);
	}

	/**
	 * Display the specified userprofile.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($username)
	{
		$profile = User::with('profile')->whereUsername($username)->firstOrFail();

		return Response::json($profile);

	}

	public function store()
	{
		Profile::create(Input::all());
	}

	public function update($username)
	{
		$user = User::whereUsername($username)->firstOrFail();
		$profile = Profile::where('user_id', '=', $user->id);

		$input = Input::only('age');

		$profile->update($input);
	}
	/**
	 * Remove the specified userprofile from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		Profile::destroy($id);

	}

}
