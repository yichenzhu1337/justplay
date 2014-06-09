'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('justPlay controllers', function() {
 
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
  });
});

describe('PhoneCat App', function() {

  describe('Phone list view', function() {

    beforeEach(function() {
      browser().navigateTo('app/index.html');
    });


    it('should filter the phone list as user types into the search box', function() {
      expect(repeater('.phones li').count()).toBe(3);

      input('query').enter('nexus');
      expect(repeater('.phones li').count()).toBe(1);

      input('query').enter('motorola');
      expect(repeater('.phones li').count()).toBe(2);
    });
  });
});
