<?php namespace Acme\Repositories;

use Acme\Interfaces\CommentRepositoryInterface;
use Comment;


class DbCommentRepository extends DbBaseRepository implements CommentRepositoryInterface {

	protected $model;

	function __construct(Comment $model)
	{
		$this->model = $model;
	}

	public function store($input)
	{
		$this->model->create($input);
	}

	public function delete($id)
	{
		$this->model->destroy($id);
	}

    public function update($id, $input)
    {
        $this->model->find($id)->update($input);
    }


}