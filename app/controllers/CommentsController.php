<?php

use Acme\Interfaces\CommentRepositoryInterface;


class CommentsController extends \ApiController {

	protected $comment;

	function __construct(CommentRepositoryInterface $comment)
	{
		$this->comment = $comment;
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
		$comment = Comment::find($id);
		return $comment;
	}

	/**
	 * Store a newly created comment in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$input = Input::all();
		$this->comment->store($input);
	}

    /**
     * Updates the comment in storage.
     *
     * @return Response
     */
    public function update($id)
    {
        $input = Input::all();
        $this->comment->update($id, $input);
    }

	/**
	 * Remove the specified comment from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$this->comment->delete($id);
	}

}
