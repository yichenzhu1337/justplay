<?php namespace Acme\Repositories;

/**
 * @package
 * @category
 * @subpackage
 *
 * @SWG\Resource(
 *   apiVersion="1.0.0",
 *   swaggerVersion="1.2",
 *   basePath="http://localhost:8000",
 *   resourcePath="/test",
 *   description="Operations about posts",
 *   produces="['application/json','application/xml','text/plain','text/html']"
 * )
 */

/**
 *
 * @SWG\Api(
 *   path="/test",
 *   description="Operations about posts",
 *   @SWG\Operation(
 *     method="GET", 
 *	   summary="Find post by ID", 
 *     notes="Returns a post based on ID",
 *     type="post",
 *     nickname="getpostById",
 *     @SWG\Parameter(
 *     	 name="postId",
 *       description="ID of post that needs to be fetched",
 *       paramType="path",
 *       type="string"
 *	   ),
 *     @SWG\ResponseMessage(code=400, message="Invalid ID supplied"),
 *     @SWG\ResponseMessage(code=404, message="Post not found")
 *   )
 * )
 */

class DbTestRepo{

}
