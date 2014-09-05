<?php namespace Acme\Repositories;

use Acme\Interfaces\NotificationRepositoryInterface;

use NotificationFriend;
use NotificationActivity;


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
		//$this->model->destroy($id);
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
    public function sendFriendRequest($from_id, $to_id, $details)
    {
        $this->notificationFriend->create([
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

}
