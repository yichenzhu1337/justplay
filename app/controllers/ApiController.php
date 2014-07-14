<?php

class ApiController extends \BaseController{
	
	protected $statusCode = 200; //default 200 success

	public function getStatusCode()
	{
		return $this->statusCode;
	}

	public function setStatusCode($statusCode)
	{
		$this->statusCode = $statusCode;

		return $this;
	}



	public function respondNotFound($message = 'Not Found!')
	{
		return $this->setStatusCode(404)->respondWithError($message);
	}

	public function respondInternalError($message = 'Internal Error!')
	{
		return $this->setStatusCode(500)->respondWithError($message);
	}




	public function respondWithError($message)
	{
		return $this->respond([
			'error' => [
				'message' => $message,
				'status_code' => $this->getStatusCode() //application error code
			]
		]);
	}

	public function respond($data, $headers=[])
	{
		return Response::json($data, $this->getStatusCode(), $headers);
	}

	
}