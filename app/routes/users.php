<?php

use Swagger\Annotations as SWG;


/**
 * @package
 * @category
 * @subpackage
 *
 * @SWG\Resource(
 *   apiVersion="1.0.0",
 *   swaggerVersion="1.2",
 *   basePath="http://localhost:8000/api/v1/",
 *   resourcePath="/users",
 *   description="Profiles Endpoints",
 *   produces="['application/json','application/xml','text/plain','text/html']"
 * )
 */

/* --------------------------------------------------------------------- */

/**
 * @SWG\Api(
 *   path="/users",
 *   @SWG\Operation(
 *     method="GET",
 *     summary="Gets every single user",
 *     notes="Returns all users Not transformed",
 *     type="User",
 *     nickname="getAllUsers"
 *   )
 * )
 */
Route::resource('users', 'UsersController');

/**
 * @SWG\Api(
 *   path="/get-auth-info",
 *   @SWG\Operation(
 *     method="GET",
 *     summary="Gets the information of the authenticated user",
 *     notes="Returns the currently authenticated user's id and username",
 *     type="User",
 *     nickname="getAuthInfo",
 *     @SWG\ResponseMessage(code=400, message="Invalid activity_id supplied"),
 *     @SWG\ResponseMessage(code=404, message="Activity not found")
 *   )
 * )
 */
Route::get('get-auth-info', 'AuthenticationController@getUserId');