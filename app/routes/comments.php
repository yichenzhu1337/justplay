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
 *   resourcePath="/comments",
 *   description="Comments Endpoints",
 *   produces="['application/json','application/xml','text/plain','text/html']"
 * )
 */

/* --------------------------------------------------------------------- */

/**
 * @SWG\Api(
 *   path="/api/v1/comments",
 *   @SWG\Operation(
 *     method="GET",
 *     summary="Gets all comments",
 *     notes="Returns all comments in the current database",
 *     type="Comment",
 *     nickname="getAllComment"
 *   )
 * )
 */

/* --------------------------------------------------------------------- */

/**
 * @SWG\Api(
 *   path="/api/v1/comments",
 *   @SWG\Operation(
 *     method="POST",
 *     summary="A comment is created by a user",
 *     notes="A comment is created by a user, most likely it will be the authenticated user posting a comment",
 *     type="Comment",
 *     nickname="postComment",
 *     @SWG\Parameters(
 *       @SWG\Parameter(
 *         name="activity_id",
 *         description="id of activity",
 *         required=true,
 *         type="integer",
 *         format="int64",
 *         paramType="body",
 *         minimum="1.0",
 *         maximum="100000.0"
 *       ),
 *       @SWG\Parameter(
 *         name="user_id",
 *         description="id of activity",
 *         required=true,
 *         type="integer",
 *         format="int64",
 *         paramType="body",
 *         minimum="1.0",
 *         maximum="100000.0"
 *       ),
 *       @SWG\Parameter(
 *         name="description",
 *         description="id of activity",
 *         required=true,
 *         type="integer",
 *         format="int64",
 *         paramType="body",
 *         minimum="1.0",
 *         maximum="100000.0"
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
 *   path="/api/v1/comments/{comment_id}",
 *   @SWG\Operation(
 *     method="DELETE",
 *     summary="Deletes a comment by the comment_id",
 *     notes="Deletes a comment based on comment_id",
 *     type="Comment",
 *     nickname="deleteCommentById",
 *     @SWG\Parameter(
 *       name="comment_id",
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
 *   path="/api/v1/comments/{comment_id}",
 *   @SWG\Operation(
 *     method="PUT",
 *     summary="Updates a comment by the comment_id",
 *     notes="Updates a comment based on comment_id",
 *     type="Comment",
 *     nickname="updateCommentById",
 *     @SWG\Parameters(
 *      @SWG\Parameter(
 *       name="comment_id",
 *       description="id of the comment that needs to be update",
 *       required=true,
 *       type="integer",
 *       format="int64",
 *       paramType="path",
 *       minimum="1.0",
 *       maximum="100000.0"
 *      ),
 *     @SWG\Parameter(
 *       name="activity_id",
 *       description="id of the activity",
 *       required=true,
 *       type="integer",
 *       format="int64",
 *       paramType="body",
 *       minimum="1.0",
 *       maximum="100000.0"
 *      ),
 *     @SWG\Parameter(
 *       name="user_id",
 *       description="id the user who has made the comment",
 *       required=true,
 *       type="integer",
 *       format="int64",
 *       paramType="body",
 *       minimum="1.0",
 *       maximum="100000.0"
 *      ),
 *     @SWG\Parameter(
 *       name="description",
 *       description="description that the user has made a comment about",
 *       required=true,
 *       type="string",
 *       paramType="body"
 *      )
 *     ),
 *     @SWG\ResponseMessage(code=400, message="Invalid activity_id supplied"),
 *     @SWG\ResponseMessage(code=404, message="Activity not found")
 *   )
 * )
 */
Route::resource('comments', 'CommentsController', ['only' => ['index', 'show', 'store', 'update','destroy']]);