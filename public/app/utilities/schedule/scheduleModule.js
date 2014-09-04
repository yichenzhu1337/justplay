var mod = angular.module('scheduleModule', []);

var factories = {};

factories.RawSchedule = function(ScheduleHelpers)
{

	return {
		getList: function()
		{
			return ['a','b','c'];
		}
	}
}

factories.ScheduleHelpers = function()
{
	return {
		createTimeBlock: function(day, s_hour, s_min, e_hour, e_min)
		{
			var starttime = moment(new Date());
			starttime.day(day).hour(s_hour).minute(s_min).second(0);

			var endtime = moment(new Date());
			endtime.day(day).hour(e_hour).minute(e_min).second(0);

			return { 
				starttime: starttime, 
				endtime: endtime 
			};
		},
		createScheduleBlock: function(sport, location, day, s_hour, s_min, e_hour, e_min)
		{
			var timeBlock = this.createTimeBlock(day, s_hour, s_min, e_hour, e_min);

			var obj = {};
			obj.sport = sport;
			obj.location = location;
			obj.starttime = timeBlock.starttime;
			obj.endtime = timeBlock.endtime;

			return obj;
		}
	}
}

mod.factory(factories);	