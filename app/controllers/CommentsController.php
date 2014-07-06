<?php

class CommentsController extends \BaseController {

	/**
	 * Display a listing of comments
	 *
	 * @return Response
	 */
	public function index()
	{
		$comments = Comment::all();

		return Response::json($comments);
	}

	/**
	 * Store a newly created comment in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$data = Input::all();

		Comment::create($data);
	}

	/**
	 * Display the specified comment.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($activity_id)
	{
		$comments = Comment::where('activity_id', '=', $activity_id);
		return Response::json($comments);
	}

	/**
	 * Remove the specified comment from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		Comment::destroy($id);

		return Redirect::route('comments.index');
	}

}
