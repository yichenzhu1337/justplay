<?php

use Acme\Interfaces\NotificationRepositoryInterface;
use Acme\Transformers\NotificationActivityTransformer;
use Acme\Transformers\NotificationFriendTransformer;


class NotificationsController extends ApiController {

    /**
     * @var Acme\Interfaces\NotificationRepositoryInterface
     */
    protected $notification;

    /**
     * @param NotificationRepositoryInterface $notification
     */
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
		return $this->notification->getAllAuthNotifications(entry::getUser()->id);
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

        switch ($request_type)
        {
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
        $auth_id = Sentry::getUser()->id;

        switch ($request_type)
        {
            case 'friends':
                $friends = $this->notification->getAllAuthFriendNotifications($auth_id);
                $array = $this->transformerCollection($friends, new NotificationFriendTransformer);
                return $array;

            case 'activities':
                $notifications = $this->notification->getAllAuthActivityNotifications($auth_id);
                $array = $this->transformerCollection($notifications, new NotificationActivityTransformer);
                return $array;

            default:
                return 'invalid request_type';
        }
    }

    /**
     * @param $request_type
     * @param $notification_id
     * @param $is_read
     */
    public function updateIsRead($request_type, $notification_id, $is_read)
    {
        $this->notification->updateIsRead($request_type, $notification_id, $is_read);
    }

}
