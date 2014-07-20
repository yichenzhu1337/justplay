{{ Form::open(array('route' => 'api.activity.store')) }}


{{ Form::text('title', 'this is the title') }}

{{ Form::text('body', 'body input') }}

{{ Form::submit('Click Me!') }}

{{ Form::close() }}