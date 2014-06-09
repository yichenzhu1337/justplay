describe('factoryModule', function(){
	var $rootScope, $scope, controller;
	beforeEach(function(){
		angular.mock.module('sportModule');
	});

	describe("Controller", function(){
		beforeEach(function() {
			inject(function($injector) {
				$rootScope = $injector.get('$rootScope');
				$scope = $rootScope.$new();
				controller = $injector.get('$controller')("sportController", {$scope:$scope});				
			})
		});
		it("Should setValue", function(){

		});

		describe('initialization', function(){
			it("Should get all sports", function(){
				alert($scope.sports);
			});
		});
	});

	describe("factoryModule", function() {
		var factory;
		beforeEach(function() {
			
			inject(function($injector) {
				factory = $injector.get('sportFactory');
			});
		});

		describe("initialization", function() {
			it("should contain 14 sports", function() {
				expect(factory.getSportInList().length).toEqual(13);
			});

			it("should contain the correct number of sports in each category", function() {
					expect(factory.getSports()['RacquetSports'][0].length).toEqual(
						 4
					);
					expect(factory.getSports()['TeamSports'][0].length).toEqual(
						 5
					);
					expect(factory.getSports()['TeamSports'][1].length).toEqual(
						 4
					);
				});	
		});

	});
});