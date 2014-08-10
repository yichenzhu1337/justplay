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
 *   resourcePath="/activity-join",
 *   description="Activitiy Join Endpoints",
 *   produces="['application/json','application/xml','text/plain','text/html']"
 * )
 */

/* --------------------------------------------------------------------- */

/**
 * @SWG\Api(
 *   path="/activity-join",
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
 *   path="/activity-join/{activity_id}",
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
 *   path="/activity-join/{activity_id}",
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
Route::resource('activity-join', 'ActivityJoinController', ['only' => ['index', 'show', 'store', 'destroy']]);