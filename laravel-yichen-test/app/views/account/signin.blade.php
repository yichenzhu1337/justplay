@extends('layout.main')

@section('content')
	Sign in

	<form action="{{ URL::route('account-sign-in-post')}}" method="post">
	
		<div class="field">
			Email: <input type="text" name="email" {{ (Input::old('email')) ? ' value="' . e(Input::old('email')) . '"' : ''}}>
			@if($errors->has('email'))           
				{{ $errors->first('email') }}
			@endif	
		</div>
		<div class="field">
			password: <input type="password" name="password">
			@if($errors->has('password'))
				{{ $errors->first('password') }}
			@endif	
		</div>
		<input type="submit" value="Sign in">
		{{Form::token()}}
	</form>
@stop