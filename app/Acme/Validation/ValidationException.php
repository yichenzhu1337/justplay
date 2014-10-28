<?php

use Validator;

class ValidationException extends \Exception {

    function __construct(Validator $validator)
    {
        $this->message = 'Validation has failed, or something';
        $this->validator = $validator;
    }

    public function getErrors()
    {
        return $this->validator->messages();
    }
}