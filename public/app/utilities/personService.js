var module = /**
* jp-authenticate Module
*
* Description
*/
angular.module('jp-authenticate', ['app-config'])
.constant('PERSON_URL', BASE_URL+"api/");

var factories = {};

factories.Person = function($http) {
	var factory = {};

	factory.register = function(first_name,last_name,email,password) {
		

	}

	return factory;
}

module.factory(factories);