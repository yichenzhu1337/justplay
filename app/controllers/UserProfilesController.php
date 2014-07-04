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
	 * Show the form for creating a new userprofile
	 *
	 * @return Response
	 */
	public function create()
	{
		return View::make('userprofiles.create');
	}

	/**
	 * Store a newly created userprofile in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$validator = Validator::make($data = Input::all(), Userprofile::$rules);

		if ($validator->fails())
		{
			return Redirect::back()->withErrors($validator)->withInput();
		}

		Userprofile::create($data);

		return Redirect::route('userprofiles.index');
	}

	/**
	 * Display the specified userprofile.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$userprofile = Userprofile::findOrFail($id);

		return View::make('userprofiles.show', compact('userprofile'));
	}

	/**
	 * Show the form for editing the specified userprofile.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		$userprofile = Userprofile::find($id);

		return View::make('userprofiles.edit', compact('userprofile'));
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
