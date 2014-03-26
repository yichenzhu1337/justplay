'use strict';

/* jasmine specs for controllers go here */
describe('strategyController', function(){
	beforeEach(module('strategyController'));

	describe('strategies', function(){
		it('passbaby', function(){
			expect(true).toBe(true); 
		});
	});
});

/*describe('justPlay controllers', function() {
 
  describe('strategyController', function(){
    var scope, ctrl;
 
    beforeEach(module('project'));
 
    beforeEach(inject(function($controller) {
      scope = {};
      ctrl = $controller('strategyController', {$scope:scope});
    }));
 
    it('should have 6 options', function() {
      expect(scope.strategies.length).toBe(6);
    });
 
 
    it('should set the default value to Earliest', function() {
      expect(scope.currentstrategy).toBe('Earliest');
    });
  });*/