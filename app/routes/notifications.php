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
 *   resourcePath="/notifications",
 *   description="Notification Endpoints",
 *   produces="['application/json','application/xml','text/plain','text/html']"
 * )
 */

/* --------------------------------------------------------------------- */

/**
 * @SWG\Api(
 *   path="/api/v1/notifications",
 *   @SWG\Operation(
 *     method="GET",
 *     summary="Gets All notifications",
 *     notes="Returns all of the authenticated user",
 *     type="Notification",
 *     nickname="getAllNotification"
 *   )
 * )
 */

/* --------------------------------------------------------------------- */

/**
 * @SWG\Api(
 *   path="/api/v1/notifications",
 *   @SWG\Operation(
 *     method="POST",
 *     summary="A notification is created",
 *     notes="A notification is created from the send to a receiver with a request type (friend, activty, message)",
 *     type="Notification",
 *     nickname="postNotification",
 *     @SWG\Parameters(
 *       @SWG\Parameter(
 *         name="from_id",
 *         description="id of the the person sending the request, most likely an authenticated user",
 *         required=true,
 *         type="integer",
 *         format="int64",
 *         paramType="body",
 *         minimum="1.0",
 *         maximum="100000.0"
 *       ),
 *       @SWG\Parameter(
 *         name="to_id",
 *         description="id of the person receiving the request",
 *         required=true,
 *         type="integer",
 *         format="int64",
 *         paramType="body",
 *         minimum="1.0",
 *         maximum="100000.0"
 *       ),
 *       @SWG\Parameter(
 *         name="request_type",
 *         description="type of request is either a friend, activity, or message request",
 *         required=true,
 *         type="string",
 *         paramType="body"
 *       )
 *     ),
 *     @SWG\ResponseMessage(code=400, message="Invalid activity_id supplied"),
 *     @SWG\ResponseMessage(code=404, message="Activity not found")
 *   )
 * )
 */

/* --------------------------------------------------------------------- */

/**
 * @SWG\Api(
 *   path="/api/v1/notifications/{id}",
 *   @SWG\Operation(
 *     method="DELETE",
 *     summary="Deletes the notification by id",
 *     notes="Deletes the notification based on id",
 *     type="Notification",
 *     nickname="deleteNotificationById",
 *     @SWG\Parameter(
 *       name="id",
 *       description="id of the notification that will be deleted",
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
//Route::resource('notifications', 'NotificationsController');

Route::post('notifications/{from_id}/{to_id}/{request_type}/{activity_id}', 'NotificationsController@notifications');
//input details

Route::resource('notificationsActivities', 'NotificationsActivitiesController');