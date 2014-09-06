<?php

use Acme\Interfaces\NotificationRepositoryInterface;

use Acme\Transformers\NotificationActivityTransformer;
use Acme\Transformers\NotificationFriendTransformer;

use League\Fractal;
use League\Fractal\Manager;
use League\Fractal\Resource\Item;
use League\Fractal\Resource\Collection;
use League\Fractal\TransformerAbstract;

use League\Fractal\Serializer\DataArraySerializer;
use League\Fractal\Serializer\ArraySerializer;
use League\Fractal\Serializer\JsonApiSerializer;

use Swagger\Annotations as SWG;


class NotificationsController extends \BaseController {

	protected $notification;

	function __construct(NotificationRepositoryInterface $notification)
	{
		$this->notification = $notification;
	}
	/**
	 * Display a listing of notifications of the authenticated user
	 *
	 * @return Response
	 */
	public function index()
	{
		// return $this->notification->getAll();
		$auth_id = Sentry::getUser()->id;
		return $this->notification->getAllAuthNotifications($auth_id);
	}

	/**
	 * Store a newly created notification in storage.
	 *
	 * @return Response
	 */
	public function store($test)
	{
        dd($test);

		$user_id = Input::get('from_id');
		$to_id = Input::get('to_id');
		$request_type = Input::get('request_type');
		$input = [
			'from_id' => $user_id,
			'to_id' => $to_id,
			'type' => $request_type
		];

		$this->notification->store($input);

	}

	/**
	 * Remove the specified notification from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$this->notification->delete($id);
	}

    /**
     * POST
     * @param $request_type
     * @param $activity_id = null
     * @return route api/v1/notifications/{request_type}/{activity_id}
     */
    public function sendNotification($request_type, $activity_id)
    {
        $from_id = Input::get('from_id');
        $to_id = Input::get('to_id');
        $details = Input::get('details');

        switch ($request_type) {

            case 'friend_request':
                $this->notification->sendFriendRequest('want_to_accept', $from_id, $to_id, $details);
                break;

            case 'activity_invite_request':
                $this->notification->sendActivityInviteRequest($from_id, $to_id, $activity_id, $details);
                break;

            default:
                return 'invalid request_type';

        }
    }

    /**
     * @param $request_type
     * @return string
     */
    public function getNotification($request_type)
    {

        $fractal = new Manager();
        $fractal->setSerializer(new ArraySerializer());

        if (isset($_GET['include'])) {
            $fractal->parseIncludes($_GET['include']);
        }

        //$request_type = ['friend', 'activity'];
        $auth_id = 1;//Sentry::getUSer()->id;

        switch ($request_type) {

            case 'friends':
                $friends = $this->notification->getAllAuthFriendNotifications($auth_id);
                $resource = new Collection($friends, new NotificationFriendTransformer, 'friends');
                $array = $fractal->createData($resource)->toArray();

                return Response::json(
                    array(
                        'errors' => [],
                        'obj' => $array
                    ));

            case 'activities':
                $notifications = $this->notification->getAllAuthActivityNotifications($auth_id);
                $resource = new Collection($notifications, new NotificationActivityTransformer, 'notifications');
                $array = $fractal->createData($resource)->toArray();

                return Response::json(
                    array(
                        'errors' => [],
                        'obj' => $array
                    ));

            default:
                return 'invalid request_type';

        }
    }

}
