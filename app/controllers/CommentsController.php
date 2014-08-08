<?php

class CommentsController extends \ApiController {

	function __construct()
	{

	}

	/**
	 * Display a listing of comments
	 *
	 * @return Response
	 */
	public function index()
	{
		$comments = Comment::all();
		return $comments;
	}

	/**
	 * Display the specified comment.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{

		$comments = Comment::find($id);

		return $this->respond([
			'data' => $this->commentTransformer->transform($comments)
		]);

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
	 * Remove the specified comment from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		Comment::destroy($id);
	}

}
