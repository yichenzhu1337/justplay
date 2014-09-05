<?php namespace Acme\Handlers;

use Acme\Interfaces\NotificationRepositoryInterface;
use Acme\Interfaces\ActivityJoinRepositoryInterface;
use Sentry;

class CommentEventHandler {

    protected $notification;
    protected $activityJoin;

    function __construct(NotificationRepositoryInterface $notification, ActivityJoinRepositoryInterface $activityJoin)
    {
        $this->notification = $notification;
        $this->activityJoin = $activityJoin;
    }

    /**
     * Sends a notification to all users in a particular activity that a person has commented
     */
    public function onStore($event)
    {
        $activity_id = $event['activity_id'];
        $details = $event['description'];
        $sub_type = 'activity_comment';

        $user_ids = $this->activityJoin->getAllUsersInActivity($activity_id);

        foreach ($user_ids as $user_id)
        {
            $from_id = 1; //Sentry::getUser->id
            $to_id = $user_id;
            $this->notification->sendActivityNotification($sub_type, $from_id, $to_id, $activity_id, $details);
        }

    }

    /**
     * Register the listeners for the subscriber.
     *
     * @param  Illuminate\Events\Dispatcher  $events
     * @return array
     */
    public function subscribe($events)
    {
        $events->listen('user.comment.store', 'Acme\Handlers\CommentEventHandler@onStore');
    }

}