<?php namespace Acme\Handlers;


use Acme\Interfaces\NotificationRepositoryInterface;


class CommentEventHandler {

    protected $notification;

    function __construct(NotificationRepositoryInterface $notification)
    {
        $this->notification = $notification;
    }

    /**
     * Handle
     */
    public function onStore($event)
    {
        $from_id = $event['from_id'];
        $to_id = $event['to_id'];
        $activity_id = $event['activity_id'];
        $details = $event['description'];

        $this->notification->sendCommentNotification($from_id, $to_id, $activity_id, $details);
    }

    /**
     * Handle
     */
    public function onUpdate($event)
    {
        $from_id = $event['from_id'];
        $to_id = $event['to_id'];
        $activity_id = $event['activity_id'];
        $details = $event['description'];

        $this->notification->sendCommentNotification($from_id, $to_id, $activity_id, $details);
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
        $events->listen('user.comment.update', 'Acme\Handlers\CommentEventHandler@onUpdate');
    }

}