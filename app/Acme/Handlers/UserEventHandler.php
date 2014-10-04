<?php namespace Acme\Handlers;


class UserEventHandler {

    /**
     * Handle user login events.
     */
    public function onUserLogin($event)
    {
        dd($event);
    }

    public function test($event)
    {
        dd($event);
    }

    /**
     * Handle user logout events.
     */
    public function onUserLogout($event)
    {
        //
    }

    /**
     * @param $events
     */
    public function subscribe($events)
    {
        $events->listen('test', 'Acme\Handlers\UserEventHandler@test');
        $events->listen('user.signup', 'Acme\Handlers\UserEventHandler@onUSerSignUp');
        $events->listen('auth.login', 'Acme\Handlers\UserEventHandler@onUserLogin');
        $events->listen('auth.logout', 'Acme\Handlers\UserEventHandler@onUserLogout');
    }
} 