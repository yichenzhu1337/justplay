@extends('layout.main')

@section('content')
	Home.

	@if(Auth::check())
		Hello {{ Auth::user()->username }}
	@elseif
		you are not signed in
	@endif
@stop