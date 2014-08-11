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
 *   resourcePath="/activity-join",
 *   description="Activitiy Join Endpoints",
 *   produces="['application/json','application/xml','text/plain','text/html']"
 * )
 */

/* --------------------------------------------------------------------- */

/**
 * @SWG\Api(
 *   path="/api/v1/activity-join/{activity_id}",
 *   @SWG\Operation(
 *     method="POST",
 *     summary="Join an activity with an id of {activity_id}",
 *     notes="The authenticated user will join an activity with an id of {activity_id}",
 *     type="ActivityJoin",
 *     nickname="postActivityJoinByActivityId",
 *     @SWG\Parameter(
 *       name="activity_id",
 *       description="id of activity that needs to be fetched",
 *       required=true,
 *       type="integer",
 *       format="int64",
 *       paramType="body",
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
 *   path="/api/v1/activity-join/{activity_id}",
 *   @SWG\Operation(
 *     method="DELETE",
 *     summary="Unjoins the activity by activity_id",
 *     notes="The authenticated user will unjoin the activity based on activity_id",
 *     type="ActivityJoin",
 *     nickname="deleteActivityByActivityId",
 *     @SWG\Parameter(
 *       name="activity_id",
 *       description="id of activity that the authenticated user will unjoin from",
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