<?php namespace Acme\Repositories;

use Acme\Interfaces\NotificationRepositoryInterface;

use NotificationFriend;
use NotificationActivity;
use Sentry;

class DbNotificationRepository extends DbBaseRepository implements NotificationRepositoryInterface {

    protected $notificationFriend;
    protected $notificationActivity;

	function __construct(NotificationFriend $notificationFriend, NotificationActivity $notificationsActivity)
	{
		$this->notificationFriend = $notificationFriend;
        $this->notificationActivity = $notificationsActivity;
	}

	public function delete($id)
	{
        $this->model->destroy($id);
	}

	public function store($input)
	{
		//$this->model->create($input);
	}

	public function getAllAuthNotifications($auth_id)
	{
		//return $this->model->where('to_id', '=', $auth_id)->get();
	}

    /**
     * POST
     */
    public function sendFriendRequest($sub_type, $from_id, $to_id, $details)
    {
        $this->notificationFriend->create([
            'sub_type' => $sub_type,
            'from_id' => $from_id,
            'to_id' => $to_id,
            'details' => $details,
            'is_read' => 0
        ]);
    }

    public function sendActivityInviteRequest($from_id, $to_id, $activity_id, $details)
    {
        $this->notificationActivity->create([
            'activity_id' => $activity_id,
            'from_id' => $from_id,
            'to_id' => $to_id,
            'details' => $details,
            'is_read' => 0
        ]);
    }

    /**
     * POST
     */
    public function sendActivityNotification($sub_type, $from_id, $to_id, $activity_id, $details)
    {
        $this->notificationActivity->create([
            'activity_id' => $activity_id,
            'sub_type' => $sub_type,
            'from_id' => $from_id,
            'to_id' => $to_id,
            'details' => $details,
            'is_read' => 0
        ]);
    }

    /**
     * GET
     */
    public function getAllAuthFriendNotifications($user_id)
    {
        return $this->notificationFriend->where('to_id', '=', $user_id)->get();
    }

    public function getAllAuthActivityNotifications($user_id)
    {
        return $this->notificationActivity->where('to_id', '=', $user_id)->get();
    }

    /**
     * [deleteFriendNotification description]
     * @param  [type] $from_id [description]
     * @param  [type] $to_id   [description]
     * @return [type]          [description]
     */
    public function deleteFriendNotification($from_id, $to_id)
    {
        $notification = $this->notificationFriend
                             ->where('from_id', '=', $from_id)
                             ->where('to_id', '=', $to_id)
                             ->orWhere('from_id', '=', $to_id)
                             ->where('to_id', '=', $from_id)
                             ->delete();
    }

    public function updateIsRead($request_type, $notification_id, $is_read)
    {
        //dd($request_type, $notification_id, $is_read);

        //$request_type = ['friend', 'activity'];
        $auth_id = Sentry::getUser()->id;

        switch ($request_type) {

            case 'friends':
                $this->notificationFriend->find($notification_id)->update([
                    'is_read' => $notification_id
                ]);
            break;

            case 'activities':
                $this->notificationActivity->find($notification_id)->update([
                    'is_read' => $notification_id
                ]);
            break;

            default:
                return 'invalid request_type';

        }

    }
}

