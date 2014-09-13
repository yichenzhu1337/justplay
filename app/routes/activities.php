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
 *   basePath="http://localhost:8000/api/v1",
 *   resourcePath="/activities",
 *   description="Activities Endpoints",
 *   produces="['application/json','application/xml','text/plain','text/html']"
 * )
 */

/* --------------------------------------------------------------------- */

Route::get('activities/activities-all-hosted', 'ActivitiesController@getAllAuthHostedActivities');

/**
 * @SWG\Api(
 *   path="/activities-all-auth",
 *   @SWG\Operation(
 *     method="GET",
 *     summary="Find an activity by activity_id",
 *     notes="Returns an activity based on activity_id",
 *     type="Activity",
 *     nickname="getActivityById",
 *     @SWG\Parameter(
 *       name="activity_id",
 *       description="id of activity that needs to be fetched",
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
Route::get('activities/activities-all-auth', 'ActivitiesController@getAllAuthActivities');


/**
 * @SWG\Api(
 *   path="/activities/activities-all-this-week",
 *   @SWG\Operation(
 *     method="GET",
 *     summary="Find an activity by activity_id",
 *     notes="Returns an activity based on activity_id",
 *     type="Activity",
 *     nickname="getActivityById",
 *     @SWG\Parameter(
 *       name="activity_id",
 *       description="id of activity that needs to be fetched",
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
Route::get('activities/activities-all-this-week', 'ActivitiesController@getAllActivitiesThisWeek');

/**
 * @SWG\Api(
 *   path="/activities/activities-all-auth-this-week",
 *   @SWG\Operation(
 *     method="GET",
 *     summary="Find an activity by activity_id",
 *     notes="Returns an activity based on activity_id",
 *     type="Activity",
 *     nickname="getActivityById",
 *     @SWG\Parameter(
 *       name="activity_id",
 *       description="id of activity that needs to be fetched",
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
Route::get('activities/activities-all-auth-this-week', 'ActivitiesController@getAllAuthActivitiesThisWeek');

/**
 * @SWG\Api(
 *   path="/activities",
 *   @SWG\Operation(
 *     method="GET",
 *     summary="Gets All activities in the database",
 *     notes="Returns all activities Not transformed",
 *     type="Activity",
 *     nickname="getAllActivities"
 *   )
 * )
 */

/* --------------------------------------------------------------------- */

/**
 * @SWG\Api(
 *   path="/activities/{activity_id}",
 *   @SWG\Operation(
 *     method="GET",
 *     summary="Find an activity by activity_id",
 *     notes="Returns an activity based on activity_id",
 *     type="Activity",
 *     nickname="getActivityById",
 *     @SWG\Parameter(
 *       name="activity_id",
 *       description="id of activity that needs to be fetched",
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

/* --------------------------------------------------------------------- */

/**
 * @SWG\Api(
 *   path="/activities",
 *   @SWG\Operation(
 *     method="POST",
 *     summary="Find an activity by activity_id",
 *     notes="Returns an activity based on activity_id",
 *     type="Activity",
 *     nickname="getActivityById",
 *     @SWG\Parameter(
 *       name="activity_id",
 *       description="id of activity that needs to be fetched",
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

/* --------------------------------------------------------------------- */

/**
 * @SWG\Api(
 *   path="/activities/{activity_id}",
 *   @SWG\Operation(
 *     method="PUT",
 *     summary="Find an activity by activity_id",
 *     notes="Returns an activity based on activity_id",
 *     type="Activity",
 *     nickname="getActivityById",
 *     @SWG\Parameter(
 *       name="activity_id",
 *       description="id of activity that needs to be fetched",
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

/* --------------------------------------------------------------------- */

/**
 * @SWG\Api(
 *   path="/activities/{activity_id}",
 *   @SWG\Operation(
 *     method="DELETE",
 *     summary="Find an activity by activity_id",
 *     notes="Returns an activity based on activity_id",
 *     type="Activity",
 *     nickname="getActivityById",
 *     @SWG\Parameter(
 *       name="activity_id",
 *       description="id of activity that needs to be fetched",
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

Route::resource('activities', 'ActivitiesController', ['only' => ['index', 'show', 'store', 'update','destroy']]);



