<?php

use Acme\Transformers\UserTransformer;


class UsersController extends ApiController {

    /**
     * @var User
     */
    protected $user;

    /**
     * @param User $user
     */
    public function __construct(User $user)
	{
		$this->user = $user;
	}

	/**
	 * Display a listing of the resource.
	 * GET /users
	 *
	 * @return Response
	 */
	public function index()
	{
        $users = $this->user->all();

        $array = $this->transformerCollection($users, new UserTransformer);

        return $this->respond($array, 200);
	}

}