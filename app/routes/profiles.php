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
 *   resourcePath="/profiles",
 *   description="Profiles Endpoints",
 *   produces="['application/json','application/xml','text/plain','text/html']"
 * )
 */

/* --------------------------------------------------------------------- */

/**
 * @SWG\Api(
 *   path="/api/v1/profiles",
 *   @SWG\Operation(
 *     method="GET",
 *     summary="Gets All users as will as their profiles",
 *     notes="Returns all activities Not transformed",
 *     type="Profile",
 *     nickname="getAllProfiles"
 *   )
 * )
 */

/* --------------------------------------------------------------------- */

/**
 * @SWG\Api(
 *   path="/api/v1/profiles/{username}",
 *   @SWG\Operation(
 *     method="GET",
 *     summary="Gets the profile of a user",
 *     notes="Returns the profile of the {username}",
 *     type="Profile",
 *     nickname="getProfileByUsername",
 *     @SWG\Parameters(
 *       @SWG\Parameter(
 *         name="username",
 *         description="Desired user's username, not email, not first name, nor last name",
 *         required=true,
 *         type="string",
 *         paramType="path"
 *       )
 *	   ),
 *     @SWG\ResponseMessage(code=400, message="Invalid activity_id supplied"),
 *     @SWG\ResponseMessage(code=404, message="Activity not found")
 *   )
 * )
 */

/* --------------------------------------------------------------------- */

/**
 * @SWG\Api(
 *   path="/api/v1/profiles/{username}",
 *   @SWG\Operation(
 *     method="PUT",
 *     summary="Updates a user's profile if they are authenticated",
 *     notes="Updates a user's profile linked with {username}",
 *     type="Profile",
 *     nickname="updateProfileByUsername",
 *     @SWG\Parameters(
  *       @SWG\Parameter(
 *         name="username",
 *         description="{username} needs to already exist",
 *         type="string",
 *         paramType="path"
 *       ),
 *       @SWG\Parameter(
 *         name="name",
 *         description="Name of {username}",
 *         type="string",
 *         paramType="body"
 *       ),
 *       @SWG\Parameter(
 *         name="gender",
 *         description="Gender of {username}",
 *         required=true,
 *         type="boolean",
 *         paramType="body"
 *       ),
 *       @SWG\Parameter(
 *         name="bio",
 *         description="Bio of {username}",
 *         type="text",
 *         paramType="body"
 *       ),
 *       @SWG\Parameter(
 *         name="age",
 *         description="Age of {username}",
 *         type="integer",
 *         paramType="body"
 *       ),
 *       @SWG\Parameter(
 *         name="email",
 *         description="Email of {username}",
 *         type="string",
 *         paramType="body"
 *       ),
 *       @SWG\Parameter(
 *         name="preferences",
 *         description="Preferences {username}",
 *         type="text",
 *         paramType="body"
 *       ),
 *       @SWG\Parameter(
 *         name="phone number",
 *         description="Phone number of {username}",
 *         type="string",
 *         paramType="body"
 *       ),
 *       @SWG\Parameter(
 *         name="link",
 *         description="Social link of {username}",
 *         type="string",
 *         paramType="body"
 *       )
 *	   ),
 *     @SWG\ResponseMessage(code=400, message="Invalid activity_id supplied"),
 *     @SWG\ResponseMessage(code=404, message="Activity not found")
 *   )
 * )
 */

Route::resource('profiles', 'ProfilesController', ['only' => ['index', 'show', 'update']]);