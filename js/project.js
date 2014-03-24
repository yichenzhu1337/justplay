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

project.controller(controllers);

