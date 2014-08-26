<?php namespace Acme\Mailers;

use User;
use Mail;


class UserMailer extends Mailer {
	
	public function welcome($user)
	{
		$subject = 'Welcome to Musbe!';
		$view = 'emails.welcome';
		$data = [];
		
		return $this->sendTo($user, $subject, $view, $data);
	}

    public function contactUser($data)
    {
        Mail::send([], $data, function($message) use ($data)
        {
            $message->from($data['auth_email'], $data['auth_username']);
            $message->to($data['receiver_email'], $data['receiver_username']);
            $message->setBody($data['body']);
        });
    }
}