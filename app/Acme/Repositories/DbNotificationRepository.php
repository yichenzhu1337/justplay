<?php namespace Acme\Repositories;

use Acme\Interfaces\NotificationRepositoryInterface;

use NotificationFriend;
use NotificationActivity;
use NotificationComment;

class DbNotificationRepository extends DbBaseRepository implements NotificationRepositoryInterface {

    protected $notificationFriend;
    protected $notificationActivity;
    protected $notificationComment;

	function __construct(NotificationFriend $notificationFriend, NotificationActivity $notificationsActivity, NotificationComment $notificationComment)
	{
		$this->notificationFriend = $notificationFriend;
        $this->notificationActivity = $notificationsActivity;
        $this->notificationComment = $notificationComment;
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

    public function sendCommentNotification($from_id, $to_id, $activity_id, $details)
    {
        $this->notificationComment->create([
            'activity_id' => $activity_id,
            'from_id' => $from_id,
            'to_id' => $to_id,
            'details' => $details,
            'is_read' => 0
        ]);
    }

    public function sendSomeoneJoinedActivityNotification($from_id, $to_id, $activity_id, $details)
    {
        $this->notificationActivity->create([
            'activity_id' => $activity_id,
            'from_id' => $from_id,
            'to_id' => $to_id,
            'details' => $details,
            'is_read' => 0
        ]);
    }

    public function sendActivityUpdatedNotification($from_id, $to_id, $activity_id, $details)
    {
        $this->notificationActivity->create([
            'activity_id' => $activity_id,
            'from_id' => $from_id,
            'to_id' => $to_id,
            'details' => $details,
            'is_read' => 0
        ]);
    }

    public function sendActivityDeletedNotification($from_id, $to_id, $activity_id, $details)
    {
        $this->notificationActivity->create([
            'activity_id' => $activity_id,
            'from_id' => $from_id,
            'to_id' => $to_id,
            'details' => $details,
            'is_read' => 0
        ]);
    }
}
