<?php

class NotificationsController extends \BaseController {

	/**
	 * Display a listing of notifications
	 *
	 * @return Response
	 */
	public function index()
	{
		$notifications = Notification::all();

		return View::make('notifications.index', compact('notifications'));
	}

	/**
	 * Show the form for creating a new notification
	 *
	 * @return Response
	 */
	public function create()
	{
		return View::make('notifications.create');
	}

	/**
	 * Store a newly created notification in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$validator = Validator::make($data = Input::all(), Notification::$rules);

		if ($validator->fails())
		{
			return Redirect::back()->withErrors($validator)->withInput();
		}

		Notification::create($data);

		return Redirect::route('notifications.index');
	}

	/**
	 * Display the specified notification.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$notification = Notification::findOrFail($id);

		return View::make('notifications.show', compact('notification'));
	}

	/**
	 * Show the form for editing the specified notification.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		$notification = Notification::find($id);

		return View::make('notifications.edit', compact('notification'));
	}

	/**
	 * Update the specified notification in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$notification = Notification::findOrFail($id);

		$validator = Validator::make($data = Input::all(), Notification::$rules);

		if ($validator->fails())
		{
			return Redirect::back()->withErrors($validator)->withInput();
		}

		$notification->update($data);

		return Redirect::route('notifications.index');
	}

	/**
	 * Remove the specified notification from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		Notification::destroy($id);

		return Redirect::route('notifications.index');
	}

}
