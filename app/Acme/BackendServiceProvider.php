<?php namespace Acme;

use Illuminate\Support\ServiceProvider;


class BackendServiceProvider extends ServiceProvider {

    public function register()
    {
        $this->app->bind(
            'Acme\Interfaces\ActivityRepositoryInterface', 
            'Acme\Repositories\DbActivityRepository'
        );

        $this->app->bind(
            'Acme\Interfaces\ActivityJoinRepositoryInterface', 
            'Acme\Repositories\DbActivityJoinRepository'
        );

        $this->app->bind(
            'Acme\Interfaces\CommentRepositoryInterface', 
            'Acme\Repositories\DbCommentRepository'
        );

        $this->app->bind(
            'Acme\Interfaces\FriendRepositoryInterface', 
            'Acme\Repositories\DbFriendRepository'
        );

        $this->app->bind(
            'Acme\Interfaces\ProfileRepositoryInterface', 
            'Acme\Repositories\DbProfileRepository'
        );

        $this->app->bind(
            'Acme\Interfaces\NotificationRepositoryInterface', 
            'Acme\Repositories\DbNotificationRepository'
        );

        $this->app->bind(
            'Acme\Interfaces\UserRepositoryInterface', 
            'Acme\Repositories\DbUserRepository'
        );
    }

}