var mod = angular.module('jp.errorHandling', ['jp.flash']);

var factories = {};

factories.errorSvc = function($q, FlashService) {

	var dataHasObj = function(data) {
		if (angular.isUndefined(data.obj)) {
			return true;
		} else {
			return false;
		}
	};

	var dataHasErrors = function(data) {
		if (angular.isDefined(data.errors) && angular.isArray(data.errors) && data.errors.length > 0) {
			return true;
		} else {
			return false;
		}
	}

	return {
		hasNoErrors: function(obj) {
			var deferred = $q.defer();
			obj.then(
				function(data) {
					if (dataHasErrors(obj)) {
						for (var i = 0 ;i < obj.error.length ; i++) {
							FlashService.show(obj.error[i].message);
						}
						deferred.reject();
					} else if (dataHasObj) {
						deferred.resolve(obj.data);
					}
				},
				function(data) {
					// HTTP Error that's uncaught
				})

			return deferred.promise;
		}
	}
}

mod.factory(factories);