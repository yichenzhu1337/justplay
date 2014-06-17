var mod = angular.module('jp.http', ['ngSanitize']);

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

services.PostSvc = function(SanitizeService, CSRF_TOKEN) {
	this.obj = function(obj) {
		var modObj = angular.copy(obj);
		if (angular.isUndefined(modObj.csrf_token)) {
			modObj.csrf_token = CSRF_TOKEN;
		}
		var sanObj = SanitizeService.sanitizeObject(modObj); 
		return sanObj;
	}
}

mod.service(services);