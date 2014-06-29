<html>
  <head>
	  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	  <meta charset="utf-8">
	  <meta http-equiv="X-UA-Compatible" content="IE=edge">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <meta name="description" content="">
	  <meta name="author" content="">
	  <link rel="shortcut icon" href="http://getbootstrap.com/docs-assets/ico/favicon.png">
	  
	  <title>justPlay</title>


	  <!-- Core CSS -->
	  <link href="app/lib/bootstrap-3.1.0/dist/css/bootstrap.css" rel="stylesheet">
	  <link href="app/fonts/font-awesome/css/font-awesome.css" rel="stylesheet">  
	  <link href="app/css/playground.css" rel="stylesheet"> 
	  <link href="app/css/activity.css" rel="stylesheet"> 
	  <link href="bower_components/angular-growl-v2/build/angular-growl.css" rel="stylesheet">
  </head>

  <body ng-app="app">
  	<div growl></div>
		<div ui-view></div>

		<!-- JS DEPENDENCIES -->
		
	  <!-- BOWER DEPENDENCIES -->
	  <script src="bower_components/jquery/dist/jquery.min.js"></script>
	  <script src="bower_components/angular/angular.min.js"></script>
	  <script src="bower_components/angular-sanitize/angular-sanitize.js"></script>
	  <script src="bower_components/angular-resource/angular-resource.min.js"></script>
	  <script src="bower_components/moment/moment.js"></script>
	  <script src="bower_components/angular-moment/angular-moment.js"></script>
	  <script src="bower_components/angular-ui-router/release/angular-ui-router.js"></script>
	  <script src="bower_components/angular-growl-v2/build/angular-growl.js"></script>


		<!-- CUSTOM SCRIPTS -->
	  <script src="app/lib/bootstrap-3.1.0/dist/js/bootstrap.min.js"></script>
	  <script src="app/lib/angular-ui-bootstrap/ui-bootstrap-tpls-0.10.0.js"></script>
	  <link href="app/lib/angular-multiselect-master/src/style.css" rel="stylesheet" type="text/css" media="all"  />
	  <script src="app/lib/angular-multiselect-master/src/multiselect.js"></script> 

	  <!-- Modules -->

		<!-- Utilities -->
		<script src="app/utilities/flashService.js"></script>
		<script src="app/utilities/http.js"></script>
		<script src="app/utilities/errorService.js"></script>		
		<script src="app/utilities/authentication.js"></script>
		<script src="app/utilities/utilities.js"></script>

		<!-- justPlay utility Directives -->
		<script src="app/modules/activities/common/commonDirectives.js"></script>
		

	  <!-- justPlay activity Modules -->
	  <script src="app/modules/activities/common/skillModule.js"></script>
	  <script src="app/modules/activities/common/friendModule.js"></script>
	  <script src="app/modules/activities/common/activityModule.js"></script>
	  <script src="app/modules/activities/components/filters/filterModule.js"></script>
	  <script src="app/modules/activities/components/sort/sortModule.js"></script>
	  <script src="app/modules/activities/components/searchbar/searchbar.js"></script>
	  <script src="app/modules/activities/components/cards/cardModule.js"></script>
	  <script src="app/modules/activities/components/datepicker/dateModule.js"></script>

		<!-- justPlay activity create module -->
		<script src="app/modules/activities/components/createform/createform.js"></script>

		<!-- justplay activities main page -->
		<script src="app/modules/activities/activities.js"></script>
		


	  <!-- justPlay login/signup Modules -->

	  <script type="text/javascript" src="app/modules/login/login.js"></script>
		<script type="text/javascript" src="app/modules/signup/signup.js"></script>
		
		<!-- justplay main page -->
	  <script type="text/javascript" src="app/modules/app.js"></script>

		<!-- CSRF Token -->
	  <script>
	  	angular.module("jp.http").constant("CSRF_TOKEN", '<?php echo csrf_token(); ?>');
	  </script>
	</body>
</html>