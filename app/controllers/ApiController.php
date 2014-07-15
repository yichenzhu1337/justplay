<?php

class ApiController extends \BaseController{
	/*
		Response Codes
		------------------------------------------------
		200: The request was successful.
		201: The resource was successfully created.
		204: The request was successful, but we did not send any content back.
		400: The request failed due to an application error, such as a validation error.
		401: An API key was either not sent or invalid.
		403: The resource does not belong to the authenticated user and is forbidden.
		404: The resource was not found.
		500: A server error occurred.
	*/
	const HTTP_FORBIDDEN = 403;
	const HTTP_NOT_FOUND = 404;
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
		return $this->setStatusCode(self::HTTP_NOT_FOUND)->respondWithError($message);
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

	public function respondCreated($message)
	{
		return $this->setStatusCode(201)->respond([
			'message' => $message
		]);
	}
}