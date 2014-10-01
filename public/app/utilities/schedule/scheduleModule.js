var mod = angular.module('scheduleModule', ['jp.utilities']);

var factories = {};

factories.ScheduleFactory = ['ScheduleHelpers', 
	function(ScheduleHelpers)
	{

		return {
			getRawList: function()
			{
				return [
					// MONDAY
					ScheduleHelpers.createScheduleBlock('Basketball', ['GYM 3'], 1, 6, 9),
					ScheduleHelpers.createScheduleBlock('Basketball', ['GYM 4'], 1, 7, 9),
					ScheduleHelpers.createScheduleBlock('Basketball', ['GYM 3'], 1, 10, 18),
					ScheduleHelpers.createScheduleBlock('Basketball', ['GYM 1'], 1, 22, 24),
					// TUESDAY
					ScheduleHelpers.createScheduleBlock('Basketball', ['GYM 3', 'GYM 4'], 2, 7, 8),
					ScheduleHelpers.createScheduleBlock('Basketball', ['GYM 3'], 2, 9, 17),
					ScheduleHelpers.createScheduleBlock('Basketball (Women Only)', ['GYM 4'], 2, 13, 14),
					ScheduleHelpers.createScheduleBlock('Basketball', ['GYM 4'], 2, 14, 21),
					ScheduleHelpers.createScheduleBlock('Basketball', ['GYM 1', 'GYM 2'], 2, 21, 24),
					// WEDNESDAY
					ScheduleHelpers.createScheduleBlock('Basketball', ['GYM 4'], 3, 6, 9),
					ScheduleHelpers.createScheduleBlock('Basketball', ['GYM 1'], 3, 10, 12),
					ScheduleHelpers.createScheduleBlock('Basketball', ['GYM 2'], 3, 10, 11),
					ScheduleHelpers.createScheduleBlock('Basketball', ['GYM 4'], 3, 11, 19),
					// THURSDAY
					ScheduleHelpers.createScheduleBlock('Basketball', ['GYM 3'], 4, 10, 13),
					ScheduleHelpers.createScheduleBlock('Basketball', ['GYM 4'], 4, 12, 17),
					ScheduleHelpers.createScheduleBlock('Basketball', ['GYM 1', 'GYM 2'], 4, 21, 24),
					// FRIDAY
					ScheduleHelpers.createScheduleBlock('Basketball', ['GYM 1', 'GYM 2'], 5, 10, 12),
					ScheduleHelpers.createScheduleBlock('Basketball', ['GYM 1'], 5, 12, 18),
					ScheduleHelpers.createScheduleBlock('Basketball', ['GYM 2'], 5, 16, 18),
					ScheduleHelpers.createScheduleBlock('Basketball', ['GYM 4'], 5, 20, 24),
					// SATURDAY
					ScheduleHelpers.createScheduleBlock('Basketball', ['GYM 1'], 6, 6, 9),
					ScheduleHelpers.createScheduleBlock('Basketball', ['GYM 1'], 6, 12, 14),
					ScheduleHelpers.createScheduleBlock('Basketball', ['GYM 3'], 6, 18, 24),
					// SUNDAY
					ScheduleHelpers.createScheduleBlock('Basketball', ['GYM 2'], 0, 7, 10),
					ScheduleHelpers.createScheduleBlock('Basketball', ['GYM 2'], 0, 12, 24),
				];
			}
		}
	}];

factories.ScheduleHelpers = ['$filter', 'DateRangeService',
	function($filter, DateRangeService)
	{
		return {
			createTimeBlock: function(day, s_hour, s_min, e_hour, e_min)
			{
				var starttime = moment(new Date());
				starttime.day(day);
				starttime.hour(s_hour);
				starttime.minute(s_min);
				starttime.second(0);
				var endtime = moment(new Date());
				endtime.day(day);
				endtime.hour(e_hour);
				endtime.minute(e_min);
				endtime.second(0);

				return { 
					starttime: starttime, 
					endtime: endtime 
				};
			},
			createScheduleBlock: function(sport, location, day, s_hour, e_hour, s_min, e_min)
			{
				if (angular.isUndefined(s_min))
				{
					var s_min = 0;
				} 
				if (angular.isUndefined(e_min))
				{
					var e_min = 0;
				}

				var timeBlock = this.createTimeBlock(day, s_hour, s_min, e_hour, e_min);

				var obj = {};
				obj.sport = sport;
				obj.location = location;
				obj.starttime = timeBlock.starttime;
				obj.endtime = timeBlock.endtime;

				return obj;
			},
			filterScheduleBlocks: function(rawList, sport, day)
			{
				// Filter the sport
				var sportSpecificList = $filter('filter')(rawList, {sport: sport}, true);
				// Filter the day
				var sportDaySpecificList = [];
				for (var i = 0; i < sportSpecificList.length; i++)
				{
					if (sportSpecificList[i].starttime.day() === day)
					{
						sportDaySpecificList.push(sportSpecificList[i]);
					}
				}

				return sportDaySpecificList;
			},
			sortScheduleBlocks: function(list, key)
			{
				var sortedList = $filter('orderBy')(list, 'starttime');
				return sortedList;
			},
			createScheduleSummary: function(list)
			{
				return {
					availability: 
						[{starttime: moment(new Date), endtime: moment(new Date)}], 
					rawList: list
				};
			},
			constructScheduleRange: function(list) 
			{
				var finishedList = [];
				console.log('init' + list.length);
				if (list.length === 0)
				{
					return [];
				}
				else
				{
					for (var i = 0; i < list.length; i++)
					{
						// Initialize List
						if (finishedList.length === 0)
						{
							finishedList.push({starttime: list[i].starttime, endtime: list[i].endtime});
						} 
						else
						{
							var latest_item = finishedList[length-1];
							if (DateRangeService.isWithinStartAndEnd(latest_item.starttime, latest_item.endtime, list[i].starttime, list[i].endtime))
							{
								continue;
							}
							if (DateRangeService.isWithinStart(latest_item.starttime, latest_item.endtime, list[i].starttime, list[i].endtime))
							{
								latest_item.endtime.hour(list[i].endtime.hour);
								continue;
							}
							if (DateRangeService.isAfterRange(latest_item.starttime, latest_item.endtime, list[i].starttime, list[i].endtime))
							{
								finishedList.push({starttime: list[i].starttime, endtime: list[i].endtime});
								continue;
							}
							if (DateRangeService.isExactlyAfterRange(latest_item.starttime, latest_item.endtime, list[i].starttime, list[i].endtime))
							{
								latest_item.endtime.hour(list[i].endtime.hour);
							}
						}
					}
				}
				return finishedList;
			}
		}
	}];

mod.factory(factories);	