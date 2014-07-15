<?php

use Illuminate\Pagination\Paginator;

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

	public function respondWithPagination(Paginator $activities, $data){
		
		$data = array_merge($data,[
			'paginator' => [
				'total_count' => $activities->getTotal(),
				'total_pages' => ceil($activities->getTotal() / $activities->getPerPage()),
				'current_page' => $activities->getCurrentPage(),
				'limit' => $activities->getPerPage()
			]
		]);

		return $this->respond($data);
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