<?php 

use Acme\Interfaces\ProfileRepositoryInterface;


class ProfilesController extends \BaseController {

	protected $profile;

	function __construct(ProfileRepositoryInterface $profile)
	{
		$this->profile = $profile;
	}

	/**
	 * Display a listing of userprofiles
	 *
	 * @return Response
	 */
	public function index()
	{
		$profiles = User::with('profile')->get();

		return Response::json($profiles);
	}

	/**
	 * Display the specified userprofile.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($username)
	{
		return Response::json([
 					'errors' => [],
 					'obj' => $this->profile->show($username)
 				]);
	}

	public function update($username)
	{
		$user = User::whereUsername($username)->firstOrFail();
		$input = Input::only('name', 'gender', 'bio', 'age', 'email', 'preferences', 'phone_number', 'social_link');
		$this->profile->update($user->id, $input);
	}

}
