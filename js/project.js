var project = angular.module('project', [])
.factory('strategyFactory', function ()	{
		var factory = {};
		var strategies = [
			'Earliest', 'Latest',
			'Most Players', 'Least Players',
			'Most Friends', 'Least Friends'
		];
		factory.getStrategies = function () {
			return strategies;
		};
		return factory;
})
.factory('sportFactory', function() {
	var factory = {};
	var sports = {
		'RacquetSports':[['Badminton', 'Tennis', 'Squash', 'Table Tennis']],
		'TeamSports':
		[
			['Basketball','Volleyball','Ultimate Frisbee', 'Soccer', 'Football'], 
			['Ice Hockey', 'Lacrosse', 'Quidditch', 'Rugby']
		]
	};
	factory.getSports = function () {
		return sports;
	};
	return factory;
});

var controllers = {};

controllers.strategyController = function($scope, strategyFactory) {
	$scope.strategies = [];
	init();
	function init() {
		$scope.strategies = strategyFactory.getStrategies();
	};
	$scope.currentstrategy = $scope.strategies[0];
	$scope.setValue = function(strategy){
		$scope.currentstrategy = strategy;
	}
};

controllers.sportController = function($scope, sportFactory) {
	$scope.sports = {};
	init();
	function init() {
		$scope.sports = sportFactory.getSports();
	};
	$scope.setValue = function(sport){
		$scope.currentsport = sport;
	}
}

project.controller(controllers);

