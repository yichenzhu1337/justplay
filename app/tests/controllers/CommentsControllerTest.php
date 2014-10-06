<?php

class CommentsControllerTest extends TestCase {

	public function setUp()
	{
		parent::setUp();
	}

	public function tearDown()
	{
		Mockery::close();
	}

	public function testAll() 
	{
		$response = $this->call('GET', '/api/v1/comments/1');

		$this->assertTrue($response->isOk());
	}

}