<?php

class UserProfilesController extends \BaseController {

	/**
	 * Display a listing of userprofiles
	 *
	 * @return Response
	 */
	public function index()
	{
		$userprofiles = Userprofile::all();

		return Response::json($userprofiles);
	}

	/**
	 * Display the specified userprofile.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($username)
	{
		$user_profile = Userprofile::where('username', '=', $username);

		return Response::json($user_profile);
	}

	/**
	 * Update the specified userprofile in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$userprofile = Userprofile::findOrFail($id);

		$validator = Validator::make($data = Input::all(), Userprofile::$rules);

		if ($validator->fails())
		{
			return Redirect::back()->withErrors($validator)->withInput();
		}

		$userprofile->update($data);

		return Redirect::route('userprofiles.index');
	}

	/**
	 * Remove the specified userprofile from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		Userprofile::destroy($id);

		return Redirect::route('userprofiles.index');
	}

}
