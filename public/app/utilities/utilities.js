var mod = angular.module('jp.utilities', ['ngSanitize']);
var services= {};


services.SanitizeService = function($sanitize) {
	this.sanitizeObject = function(obj) {
			var ret = {};
			angular.forEach(obj, function(value, key) {
				if (!(angular.isDefined(value) && angular.isFunction(value)))
				{
					value = String(value);
					ret[key] = $sanitize(value);
				} else {
					ret[key] = value;
				}
			}, ret);
			return ret;
	};

	this.sanitizeArray = function(arr) {
		var ret = [];
		angular.forEach(arr, function(value, key) {
			if (angular.isDefined(ret[key]) && (angular.isObject(ret[key]) || angular.isArray(ret[key])))
			{
				ret[key] = $sanitize(value);
			} else {
				ret[key] = value;
			}
		}, ret);
		return ret;		
	};
	
};

mod.service(services);
