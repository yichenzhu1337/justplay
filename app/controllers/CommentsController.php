<?php

use Acme\Transformers\CommentTransformer;

class CommentsController extends \ApiController {

	protected $commentTransformer;

	function __construct(CommentTransformer $commentTransformer) 
	{
		$this->commentTransformer = $commentTransformer;
	}
	/**
	 * Display a listing of comments
	 *
	 * @return Response
	 */
	public function index()
	{
		return $this->respond([
			'data' => $this->commentTransformer->transformCollection(Activity::all()->toArray())
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
	 * Display the specified comment.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($activity_id)
	{
		$comments = Comment::where('activity_id', '=', $activity_id);

		//$comments = Comment::find(1);
		/*
		return $this->respond([
			'data' => $this->commentTransformer->transform($comments)
		]);
		*/
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
