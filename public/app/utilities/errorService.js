var mod = angular.module('jp.errorHandling', ['jp.flash']);

var factories = {};

factories.errorSvc = function($q, FlashService) {

	var dataHasObj = function(data) {
		if (angular.isUndefined(data.obj)) {
			return false;
		} else {
			return true;
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
		/**
		 * Checks if a HTTP Request has returned an object
		 * @param  {promise}  obj HTTP Promise
		 * @return {promise}     promise
		 */
		hasNoErrors: function(obj) {
			var deferred = $q.defer();
			obj.then(
				function(resp) {
					var data = resp.data;
					if (dataHasErrors(data)) {
						for (var i = 0 ;i < data.error.length ; i++) {
							FlashService.show(data.error[i].message, 'error');
						}
						deferred.reject();
					} else if (dataHasObj(data)) {
						deferred.resolve(data);
					} else {
						FlashService.show('Interal Server Error Problem', 'error');
						// Redirect to error page.
						deferred.reject();
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