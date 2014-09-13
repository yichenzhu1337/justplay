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
			if (element[key] === null || angular.isUndefined(element[key]))
			{
				continue;
			}
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

	this.getDefaultDateRange = function()
	{
		var dates = {};
		dates.startRange = moment(new Date()).tz('America/Detroit').startOf('week');
		dates.endRange = moment(new Date()).tz('America/Detroit').add('weeks',1).endOf('week');
		return dates;
	}

	this.isWithinDateRange = function(startRange, endRange, curMoment)
	{
		var comparisonUnit = 'day';
		// Check Edge Cases
		if (startRange.isSame(curMoment, comparisonUnit) || endRange.isSame(curMoment, comparisonUnit))
		{
			return true;
		} else if (startRange.isBefore(curMoment, comparisonUnit) && endRange.isAfter(curMoment, comparisonUnit)) {
			return true;
		} else {
			return false;
		}
	}

	this.isValidTimeRange = function(startRange, endRange, excludeEquality)
	{
		startRange = moment(startRange);
		endRange = moment(endRange);
		var t1 = moment({
			h: startRange.hour(), 
			m: startRange.minute(), 
			s: startRange.second(), 
			ms: startRange.millisecond()});
		var t2 = moment({
			h: endRange.hour(), 
			m: endRange.minute(), 
			s: endRange.second(), 
			ms: endRange.millisecond()});
		if (angular.isDefined(excludeEquality) && excludeEquality && startRange.isSame(endRange,'minute'))
		{
			return false
		}
		if (t1.isBefore(t2))
		{
			return true;
		} 
		else
		{
			return false;
		}
	}
}

services.DateRangeService = function()
{
	var comparisonUnit = 'day';

	this.isWithinStartAndEnd = function(range1_s, range1_e, range2_s, range2_e)
	{
 
		if (
			(range1_s.isSame(range2_s) || range1_s.isBefore(range2_s)) && 
			(range1_e.isSame(range2_e) || range1_e.isAfter(range2_e)))
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	this.isWithinStart = function(range1_s, range1_e, range2_s, range2_e)
	{
		if ((range1_s.isSame(range2_s) || (range1_s.isBefore(range2_s) && range2_s.isBefore(range1_e))) && (range1_e.isBefore(range2_e) && !range1_e.isSame(range2_e)))
		{
			return true;
		} 
		else
		{
			return false;
		}
	}

	this.isWithinEnd = function(range1_s, range1_e, range2_s, range2_e)
	{
		if ((range1_e.isSame(range2_e) || range1_e.isBefore(range2_s)) && range2_s.isBefore(range1_s))
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	// Inverse of withinstartandend
	this.isOverStartAndEnd = function(range1_s, range1_e, range2_s, range2_e)
	{
		if (range2_s.isBefore(range1_s) && range2_e.isAfter(range1_e))
		{
			return true;
		}
		else
		{ 
			return false;
		}
	}

	this.isBeforeRange = function(range1_s, range1_e, range2_s, range2_e)
	{
		if (range2_e.isBefore(range1_s) && !range1_s.isSame(range2_e))
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	this.isAfterRange = function(range1_s, range1_e, range2_s, range2_e)
	{
		if (range1_e.isBefore(range2_s) && !range1_e.isSame(range2_s))
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	this.isExactlyBeforeRange = function(range1_s, range1_e, range2_s, range2_e)
	{
		if (range1_s.isSame(range2_e) && range2_s.isBefore(range1_s))
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	this.isExactlyAfterRange = function(range1_s, range1_e, range2_s, range2_e)
	{
		if (range1_e.isSame(range2_s) && range2_e.isAfter(range1_e))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}

mod.service(services);
