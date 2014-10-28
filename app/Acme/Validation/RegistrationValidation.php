<?php namespace Acme\Validation;

class RegistrationValidation extends Validation {

    public function getRules()
    {
        $rules = [
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',

        ];

        return $rules;
    }

} 