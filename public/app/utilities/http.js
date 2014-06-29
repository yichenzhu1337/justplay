var mod = angular.module('jp.http', ['jp.utilities']);

var services= {};

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