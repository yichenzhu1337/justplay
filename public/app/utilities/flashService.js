var module = /**
* jp-authenticate Module
*
* Description
*/
angular.module('jp.flash', ['angular-growl']);

var factories = {};

factories.FlashService = function($rootScope, growl) {
  return {
    show: function(message, style) {
    	var options = {};
      switch (style) {
      	case "success":
      		options.ttl = 2000;
      		break;
      	case "error":
      		options.ttl = 10000;
      		break;
      	case "info":

      		break;
	   	};
	    growl[style](message, options);
      
    },
    clear: function() {
      $rootScope.flash = "";
    }
  }
}

module.factory(factories);