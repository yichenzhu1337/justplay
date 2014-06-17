<?php

class AdminController extends BaseController {

	public function __construct()
	{
		$this->beforeFilter('csrf_json', array('on' => 'post'));
	}

	public function index()
	{
		return View::make('admin');
	}

}
