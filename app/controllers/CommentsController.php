<?php

use Acme\Interfaces\CommentRepositoryInterface;


/**
 * Class CommentsController
 */
class CommentsController extends \ApiController {

    /**
     * Variables
     *
     * @var Acme\Interfaces\CommentRepositoryInterface
     */
    protected $comment;

    /**
     * CommentsController Constructor
     *
     * @param CommentRepositoryInterface $comment
     */
    function __construct(CommentRepositoryInterface $comment)
	{
		$this->comment = $comment;
	}

	/**
	 * Store a newly created comment in storage.
	 * Event fires
     *
	 * @return Response
	 */
	public function store()
	{
		$input = Input::all();
		$this->comment->store($input);

        Event::fire('user.comment.store', ['input' => $input]);
	}

    /**
     * Updates the comment in storage.
     * Event fires
     *
     * @param int $id
     * @return Response
     */
    public function update($id)
    {
        $input = Input::all();
        $this->comment->update($id, $input);

        Event::fire('user.comment.update', ['input' => $input]);
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
