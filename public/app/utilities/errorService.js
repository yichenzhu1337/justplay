var mod = angular.module('jp.http', ['ngSanitize']);

var factories = {};

factories.SanitizeService = function($sanitize) {
	return {
		sanitizeObject: function(obj) {
			var ret = {};
			angular.forEach(obj, function(value, key) {
				ret[key] = $sanitize(value);
			}, ret);
			return ret;
		},
		sanitizeArray: function(arr) {
			var ret = [];
			angular.forEach(arr, function(value, key) {
				ret[key] = $sanitize(value);
			}, ret);
			return ret;		
		}
	}
}

factories.PostSvc = function(SanitizeService, CSRF_TOKEN) {
	return {
		obj: function(obj) {
			var modObj = angular.copy(obj);
			if (angular.isUndefined(modObj.csrf_token)) {
				modObj.csrf_token = CSRF_TOKEN;
			}
			return SanitizeService.sanitizeObject(modObj);
		}
	}
}

mod.factory(factories);