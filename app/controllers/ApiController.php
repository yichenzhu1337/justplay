<?php

use League\Fractal;
use League\Fractal\Manager;
use League\Fractal\Resource\Item;
use League\Fractal\Resource\Collection;
use League\Fractal\Serializer\DataArraySerializer;
use League\Fractal\Serializer\ArraySerializer;


class ApiController extends \BaseController{

	/*
        Response Code Reference List
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

    /**]
     * @param $data
     * @param $status_code
     * @param array $headers
     * @return mixed
     */
    public function respond($data, $status_code, $headers=[])
    {
        return Response::json($data, $status_code, $headers);
    }

    /**
     * @param $message
     * @param $status_code
     * @return mixed
     */
    public function respondError($message, $status_code)
    {
        return $this->respond([
            'errors' => [[
                'message' => $message,
                'status_code' => $status_code
            ]]
        ], $status_code);
    }

    /**
     * @param $message
     * @return mixed
     */
    public function respondCreated($message)
	{
		return $this->setStatusCode(201)->respond([
			'message' => $message
		]);
	}

    /**
     * @param $item
     * @param $transformer
     * @return array
     */
    public function transformerItem($item, $transformer)
    {
        // Sets the return output to data{} object
        $fractal = new Manager();
        $fractal->setSerializer(new DataArraySerializer());

        // Checks for includes in the transformer ?include=
        if (isset($_GET['include'])) {
            $fractal->parseIncludes($_GET['include']);
        }

        // Transforms it to a desired array output
        $resource = new Item($item, $transformer);
        $array = $fractal->createData($resource)->toArray();

        return $array;
    }

    /**
     * @param $collection
     * @param $transformer
     * @return array
     */
    public function transformerCollection($collection, $transformer)
    {
        // Sets the return output to data{} object
        $fractal = new Manager();
        $fractal->setSerializer(new DataArraySerializer());

        // Checks for includes in the transformer ?include=
        if (isset($_GET['include'])) {
            $fractal->parseIncludes($_GET['include']);
        }

        // transforms it to an array output
        $resource = new Collection($collection, $transformer);
        $array = $fractal->createData($resource)->toArray();

        return $array;
    }
}