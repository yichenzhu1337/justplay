<?php

class FriendsController extends \BaseController {

	/**
	 * Display a listing of friends
	 *
	 * @return Response
	 */
	public function index()
	{
		$friends = Friend::all();

		return View::make('friends.index', compact('friends'));
	}

	/**
	 * Show the form for creating a new friend
	 *
	 * @return Response
	 */
	public function create()
	{
		return View::make('friends.create');
	}

	/**
	 * Store a newly created friend in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$validator = Validator::make($data = Input::all(), Friend::$rules);

		if ($validator->fails())
		{
			return Redirect::back()->withErrors($validator)->withInput();
		}

		Friend::create($data);

		return Redirect::route('friends.index');
	}

	/**
	 * Display the specified friend.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$friend = Friend::findOrFail($id);

		return View::make('friends.show', compact('friend'));
	}

	/**
	 * Show the form for editing the specified friend.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		$friend = Friend::find($id);

		return View::make('friends.edit', compact('friend'));
	}

	/**
	 * Update the specified friend in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$friend = Friend::findOrFail($id);

		$validator = Validator::make($data = Input::all(), Friend::$rules);

		if ($validator->fails())
		{
			return Redirect::back()->withErrors($validator)->withInput();
		}

		$friend->update($data);

		return Redirect::route('friends.index');
	}

	/**
	 * Remove the specified friend from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		Friend::destroy($id);

		return Redirect::route('friends.index');
	}

}
