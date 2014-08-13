var mod = angular.module('jp.http', ['jp.utilities','jp.flash']);

var services= {};
var factories = {};

factories.API = function($http, $q, SanitizeService, FlashService, CSRF_TOKEN){

	var ResponseValidation = 
	{
		hasInvalidDataFormat: function(data) {
			if (angular.isDefined(angular.isObject(data)) && angular.isDefined(data.errors) && angular.isArray(data.errors)) {
				return false;
			} else {
				return true;
			}
		},
		hasDataObj: function(data) {
			if (angular.isUndefined(data.obj)) {
				return false;
			} else {
				return true;
			}
		},
		hasDataErrors: function(data) {
			if (angular.isDefined(data.errors) && angular.isArray(data.errors) && data.errors.length > 0) {
				return true;
			} else {
				return false;
			}
		}
	}

	var responseHandler = 
	{
		validateResponse: function(promise) {
			var d = $q.defer();

			promise.then(
				function(response){
					var data = response.data;
					if (ResponseValidation.hasInvalidDataFormat(data)) {
						d.reject('Invalid Response Format, must contain an error array and obj object');
					} else {
						d.resolve(data);
					}
				});

			return d.promise;
		},
		returnObjOrErrors: function(promise) {
			var d = $q.defer();

			promise.then(
				function(response) {
					if (ResponseValidation.hasDataErrors(response)) {
						d.reject(response.errors);
					} else if (ResponseValidation.hasDataObj(response)) {
						d.resolve(response.obj);
					}
				},
				function(InternalError) {
					FlashService.show(InternalError, 'error');
					d.reject();
				});

			return d.promise;
		}
	}

	var dataTransformations = 
	{
		copyObject: function(postObj) {
			return angular.copy(postObj);
		},
		appendCSRFToken: function(postObj) {
			if (angular.isUndefined(postObj.csrf_token)) {
				postObj.csrf_token = CSRF_TOKEN;
			}		
			return postObj; // Might not be neccessary.
		},
		appendLoginId: function(postObj) {
			return postObj;
		},
		sanitizeObject: function(postObj) {
			return SanitizeService.sanitizeObject(postObj);
		}
	};

	var applyDataTransformations = function(postObj) {
		// Can optimize by currying
		postObj = dataTransformations.copyObject(postObj);
		postObj = dataTransformations.appendCSRFToken(postObj);
		postObj = dataTransformations.appendLoginId(postObj);
		postObj = dataTransformations.sanitizeObject(postObj);
		return postObj;
	}

	var ValidateResponse = function(promise) {
		var coop = responseHandler.validateResponse(promise);
		var doop = responseHandler.returnObjOrErrors(coop);
		return doop;
	}

	return {
		post: function(url, data) {
			if (!data)
			{
				data = {};
			}
			data = applyDataTransformations(data);
			var postPromise = $http.post(url, data);
			var results = ValidateResponse(postPromise);
			return results;
		},
		get: function(url) {
			return ValidateResponse($http.get(url));
		}
	}
};

factories.Interceptors = function(CSRF_TOKEN, SanitizeService) {

	var dataTransformations = 
	{
		copyObject: function(postObj) {
			return angular.copy(postObj);
		},
		appendCSRFToken: function(postObj) {
			if (angular.isUndefined(postObj.csrf_token)) {
				postObj.csrf_token = CSRF_TOKEN;
			}		
			return postObj; // Might not be neccessary.
		},
		appendLoginId: function(postObj) {
			return postObj;
		},
		sanitizeObject: function(postObj) {
			return SanitizeService.sanitizeObject(postObj);
		}
	};

	return {
		Request: function(param) {
			var modifiedParams;
			modifiedParams = dataTransformations.copyObject(param);
			modifiedParams = dataTransformations.appendCSRFToken(param);
			modifiedParams = dataTransformations.sanitizeObject(param);
			return modifiedParams;
		}
	}
}

mod.factory(factories);
mod.service(services);