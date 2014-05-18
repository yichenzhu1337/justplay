@extends('layout.main')

@section('content')
<form action="{{ URL::route('account-create-post') }}" method="post">

	<pre> {{ print_r($errors) }}</pre>
	
	<div class="field">
	    Email: <input type="text" name="email" {{ (Input::old('email')) ? 'value="'. e(Input::old('email')) .'"' : '' }}/>

	    @if($errors->has('email'))
	        {{ $errors->first('email') }}
	    @endif
	</div>

	<div class="field">
	    Username: <input type="text" name="username" {{ (Input::old('username')) ? 'value="'. e(Input::old('username')) .'"' : '' }}/>

	    @if($errors->has('username'))
	        {{ $errors->first('username') }}
	    @endif
	</div>

	<div class="field">
	    Password: <input type="password" name="password" />

	    @if($errors->has('password'))
	        {{ $errors->first('password') }}
	    @endif
	</div>

	<div class="field">
	    Password Again: <input type="password" name="password_again" />

	    @if($errors->has('password_again'))
	        {{ $errors->first('password_again') }}
	    @endif
	</div>

    {{ Form::token() }}

    <input type="submit" value="Create Account"/>
</form>
@stop

