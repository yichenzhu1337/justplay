var mod = angular.module('jp.utilities', ['ngSanitize']);
var services= {};


services.SanitizeService = function($sanitize) {
	this.sanitizeObject = function(obj) {
			var ret = {};
			angular.forEach(obj, function(value, key) {
				ret[key] = $sanitize(value);
			}, ret);
			return ret;
	};

	this.sanitizeArray = function(arr) {
		var ret = [];
		angular.forEach(arr, function(value, key) {
			ret[key] = $sanitize(value);
		}, ret);
		return ret;		
	};
	
};

mod.service(services);
