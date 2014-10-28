<?php

abstract class Validation {
	
	protected $rules;
	protected $input;
	protected $message;

	function __construct(array $input = [])
	{
		$this->input = $input;
	}

	public function validate()
	{
		$rules = $this->getRules();
		$validator = Validator::make($this->getInput(), $this->rules);

		if ($validator->fails())
		{
			throw new ValidationException($validator);
		}
	}

	public function getRules()
	{
		return $this->rules;
	}

	public function getInput()
	{
		return $this->input;
	}

}