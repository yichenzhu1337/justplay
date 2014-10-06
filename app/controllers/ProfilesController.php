<?php 

use Acme\Interfaces\ProfileRepositoryInterface;


class ProfilesController extends \BaseController {

	protected $profile;
    protected $user;

	function __construct(ProfileRepositoryInterface $profile, User $user)
	{
		$this->profile = $profile;
        $this->user = $user;
	}

	/**
	 * Display a listing of userprofiles
	 *
	 * @return Response
	 */
	public function index()
	{
		$profiles = User::with('profile')->get();

		return $profiles;
	}

	/**
	 * Display the specified user's profile.
	 *
	 * @param  int  $username
	 * @return Response
	 */
	public function show($username)
	{
		return $this->profile->show($username);
	}

    /**
     * @param $username
     */
    public function update($username)
	{
		$user = User::whereUsername($username)->firstOrFail();

		$input = Input::only('name', 'gender', 'bio', 'age', 'email', 'preferences', 'phone_number', 'social_link');

		$this->profile->update($user->id, $input);
	}

}
