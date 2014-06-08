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


	  <!-- Core CSS - Include with every page -->
	  <link href="app/lib/bootstrap-3.1.0/dist/css/bootstrap.css" rel="stylesheet">
	  <link href="app/fonts/font-awesome/css/font-awesome.css" rel="stylesheet">  

	  <link href="app/css/playground.css" rel="stylesheet"> 
	  <link href="app/css/activity.css" rel="stylesheet"> 
  </head>

  <body ng-app="app">
		<div ui-view></div>

		<!-- JS DEPENDENCIES -->

		<!-- Core CSS - Include with every page -->
	  <link href="app/lib/bootstrap-3.1.0/dist/css/bootstrap.css" rel="stylesheet">
	  <link href="app/fonts/font-awesome/css/font-awesome.css" rel="stylesheet">  

	  <link href="app/css/playground.css" rel="stylesheet"> 
	  <link href="app/css/activity.css" rel="stylesheet"> 
	  <!-- Core Scripts - Include with every page -->
	  <script src="app/lib/jquery/jquery-1.10.2.js"></script>
	  <script src="app/lib/bootstrap-3.1.0/dist/js/bootstrap.min.js"></script>

	  <!-- justPlay JS -->
	  <!-- script src="js/non-angular/popovers.js"></script-->

	  <!-- Angular Js -->
	  <script src="app/lib/angular/angular.min.js"></script>
	  <script src="app/lib/angular/angular-resource.min.js"></script>
	  <script src="app/lib/angular/angular-route.min.js"></script>

	  <!-- Angular UI Bootstrap Directives -->
	  <script src="app/lib/angular-ui-bootstrap/ui-bootstrap-tpls-0.10.0.js"></script>

	  <!-- Date picker & Moment.js-->
	  <script type="text/javascript" src="app/lib/bootstrap-daterangepicker-master/moment.js"></script>
	  <script type="text/javascript" src="app/lib/bootstrap-daterangepicker-master/daterangepicker.js"></script>
	  <link rel="stylesheet" type="text/css" media="all" href="app/lib/bootstrap-daterangepicker-master/daterangepicker-bs3.css" />
	  <script src="app/lib/angular-moment/angular-moment.js"></script>
	  
	  <!-- Angular UI -->
	  <script type="text/javascript" src="app/lib/ui-utils-0.1.1/ui-utils.js"></script>

	  <!-- Angular multi select -->
	  <link rel="stylesheet" type="text/css" media="all" href="app/lib/angular-multiselect-master/src/style.css" />
	  <script src="app/lib/angular-multiselect-master/src/multiselect.js"></script> 

	  <!-- Angular ui router -->
	  <script type="text/javascript" src="bower_components/angular-ui-router/release/angular-ui-router.js"></script>


	  <!-- Modules -->

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

	</body>
</html>