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
 *   basePath="http://localhost:8000",
 *   resourcePath="/friends",
 *   description="Comments Endpoints",
 *   produces="['application/json','application/xml','text/plain','text/html']"
 * )
 */

/* --------------------------------------------------------------------- */

/**
 * @SWG\Api(
 *   path="/api/v1/friends",
 *   @SWG\Operation(
 *     method="GET",
 *     summary="Gets all of authenticated user's friends",
 *     notes="Returns all of authenticated user's friends",
 *     type="Friend",
 *     nickname="getAllAuthFriends"
 *   )
 * )
 */

/* --------------------------------------------------------------------- */

/**
 * @SWG\Api(
 *   path="/api/v1/friends",
 *   @SWG\Operation(
 *     method="POST",
 *     summary="Person A and B become friends",
 *     notes="Creates a relationship between two people",
 *     type="Friend",
 *     nickname="postFriend",
 *     @SWG\Parameters(
 *       @SWG\Parameter(
 *         name="user1_id",
 *         description="user1_id",
 *         required=true,
 *         type="integer",
 *         format="int64",
 *         paramType="body",
 *         minimum="1.0",
 *         maximum="100000.0"
 *		 ),
 *       @SWG\Parameter(
 *         name="user2_id",
 *         description="user2_id",
 *         required=true,
 *         type="integer",
 *         format="int64",
 *         paramType="body",
 *         minimum="1.0",
 *         maximum="100000.0"
 *		 )
 *     ),
 *     @SWG\ResponseMessage(code=400, message="Invalid activity_id supplied"),
 *     @SWG\ResponseMessage(code=404, message="Activity not found")
 *   )
 * )
 */

/* --------------------------------------------------------------------- */

/**
 * @SWG\Api(
 *   path="/friends/{friend_id}",
 *   @SWG\Operation(
 *     method="DELETE",
 *     summary="Delete {friend_id}",
 *     notes="Deletes a friend with {friend_id}",
 *     type="Friend",
 *     nickname="deleteFriendById",
 *     @SWG\Parameter(
 *       name="friend_id",
 *       description="friend_id is person the authenticated user wants to terminate the relationship with",
 *       required=true,
 *       type="integer",
 *       format="int64",
 *       paramType="path",
 *       minimum="1.0",
 *       maximum="100000.0"
 *     ),
 *     @SWG\ResponseMessage(code=400, message="Invalid activity_id supplied"),
 *     @SWG\ResponseMessage(code=404, message="Activity not found")
 *   )
 * )
 */
Route::resource('friends', 'FriendsController', ['only' => ['index', 'store','destroy']]);

/**
 * @SWG\Api(
 *   path="/friends/check-if-friends",
 *   @SWG\Operation(
 *     method="POST",
 *     summary="Checks to see if two people are friends",
 *     notes="Returns a status as ['friends', 'notification_sent', 'notification_received', 'not_friends']",
 *     type="Friend",
 *     nickname="checkIfFriends",
 *     @SWG\Parameters(
 *       @SWG\Parameter(
 *         name="auth_id",
 *         description="auth_id should already be provided in the backend",
 *         required=true,
 *         type="integer",
 *         format="int64",
 *         paramType="body",
 *         minimum="1.0",
 *         maximum="100000.0"
 *		 ),
 *       @SWG\Parameter(
 *         name="stranger_id",
 *         description="user2_id",
 *         required=true,
 *         type="integer",
 *         format="int64",
 *         paramType="body",
 *         minimum="1.0",
 *         maximum="100000.0"
 *		 )
 *     ),
 *     @SWG\ResponseMessage(code=400, message="Invalid activity_id supplied"),
 *     @SWG\ResponseMessage(code=404, message="Activity not found")
 *   )
 * )
 */
Route::post('friends/check-if-friends', 'FriendsController@checkIfFriends');