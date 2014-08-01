<?php

use Acme\Transformers\CommentTransformer;

class CommentsController extends \ApiController {

	/**
	 * Display a listing of comments
	 *
	 * @return Response
	 */
	public function index()
	{
		//$comments = Comment::where('activity_id', '=', 1)->get()->toArray();
		$comments = Comment::all();
		return $comments;
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
	public function show($id)
	{

		$comments = Comment::find($id);

		return $this->respond([
			'data' => $this->commentTransformer->transform($comments)
		]);

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
