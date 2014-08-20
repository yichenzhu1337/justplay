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

services.DateTimeService = function()
{
	this.SerializeMomentsToUTC = function(element) 
	{
		// Deserialize Moments and Dates into MySqlFormat
		for (var key in element)
		{
			console.log('Key: ' + key +' element: ' + element[key]);
			if (element[key] instanceof Date)
			{
				element[key] = moment(element[key]);
			} 
			if (angular.isDefined(element[key]._isAMomentObject) && element[key]._isAMomentObject)
			{
				element[key] = moment.tz(element[key], 'Etc/UTC').toDate().toMysqlFormat();
			}
		}
		
		return element;
	} 
}

mod.service(services);
