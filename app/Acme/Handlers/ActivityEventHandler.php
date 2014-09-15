<?php namespace Acme\Handlers;

use Acme\Interfaces\NotificationRepositoryInterface;
use Acme\Interfaces\ActivityJoinRepositoryInterface;
use Sentry;

class ActivityEventHandler {

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
    public function onUpdate($event)
    {

        /*
         * array (size=8)
          'id' => string '1' (length=1)
          'user_id' => int 1
          'location' => string 'some plaec' (length=10)
          'date_from' => string '12/12/12' (length=8)
          'date_to' => string '12/12/12' (length=8)
          'capacity' => int 1
          'description' => string 'description' (length=11)
          'sport' => string 'tennis' (length=6)
         */

        $activity_id = $event['activity_id'];
        $details = $event['description'];

        $user_ids = $this->activityJoin->getAllUsersInActivity($activity_id);

        foreach ($user_ids as $user_id)
        {
          if ($user_id != Sentry::getUser()->id)
          {
            $from_id = Sentry::getUser()->id;
            $to_id = $user_id;
            $this->notification->sendActivityNotification('activity_update', $from_id, $to_id, $activity_id, $details);
          }
        }

    }

    /**
     * Sends a notification to all users in a particular activity that a person has commented
     */
    public function onDelete($event)
    {

        $activity_id = $event['activity_id'];
        $details = $event['description'];

        $user_ids = $event['user_ids'];

        foreach ($user_ids as $user_id)
        {
          if ($user_id != Sentry::getUser()->id)
          {
            $from_id = Sentry::getUser()->id;
            $to_id = $user_id;

            $this->notification->sendActivityNotification('activity_delete', $from_id, $to_id, null, $details);
          }
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
        $events->listen('user.activity.update', 'Acme\Handlers\ActivityEventHandler@onUpdate');
        $events->listen('user.activity.delete', 'Acme\Handlers\ActivityEventHandler@onDelete');
    }

}