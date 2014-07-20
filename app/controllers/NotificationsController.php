<?php

class NotificationsController extends \BaseController {

	/**
	 * Display a listing of notifications of the authenticated user
	 *
	 * @return Response
	 */
	public function index()
	{

		$user_id = Sentry::getUser()->id;

		$all_my_requests = "SELECT * FROM notifications WHERE to_id = $user_id"; //friend requests
		$result = DB::select($all_my_requests);

		return $result;
	}

	/**
	 * Store a newly created notification in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$user_id = Sentry::getUser()->id;
		$to_id = Input::get('stranger_id');;
		$request_type = Input::get('request_type'); //friend

		Notification::create($data);

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
	public function destroy()
	{
		//input {from_id: , to_id: }
		$are_they_friends = "SELECT * FROM notifications";
		$are_they_friends .= "WHERE ";
		$are_they_friends.= "from_id = $from_id"; 
		$are_they_friends .= "AND ";
		$are_they_friends .= "to_id = $to_id";
		$notification_sent_query = DB::select($notification_sent);
		Notification::destroy($notification_sent_query);
	}

}
