describe('scheduleModule', function(){

	beforeEach(function() {
		angular.mock.module('scheduleModule');
	})

	describe('ScheduleFactory', function() {
		var ScheduleFactory;

		beforeEach(function(){
			inject(function($injector) {
				ScheduleFactory = $injector.get('ScheduleFactory');
			})
		});
		
		describe("getRawList", function() {
			it ("should return an array", function() {
				expect(angular.isArray(ScheduleFactory.getRawList()) && ScheduleFactory.getRawList().length > 0).toBe(true);
			});
		});
	});

	describe('ScheduleHelpers', function() {
		var ScheduleHelpers;

		beforeEach(function() {
			inject(function($injector) {
				ScheduleHelpers = $injector.get('ScheduleHelpers');
				ScheduleFactory = $injector.get('ScheduleFactory');

			})
		})

		describe('createTimeBlock', function() {
			var TimeBlock;
			var day, s_hour, s_min, e_hour, e_min;

			beforeEach(function() {
				day = 1; // Monday;
				s_hour = 2;
				s_min = 32;
				e_hour = 3;
				e_min = 0;
				TimeBlock = ScheduleHelpers.createTimeBlock(day, s_hour, s_min, e_hour, e_min);
			});

			it ("should return an object", function() {
				expect(TimeBlock instanceof Object).toBe(true);
			});

			it ("should return two items in an object", function() {
				expect(Object.keys(TimeBlock).length).toEqual(2);
			});

			it ("should return two moment objects called starttime and endtime", function(){
				expect(angular.isDefined(TimeBlock.starttime) && angular.isDefined(TimeBlock.endtime)).toBe(true);
				expect(TimeBlock.starttime._isAMomentObject && TimeBlock.endtime._isAMomentObject).toBe(true);
			});

			it ("should match given day & hour & minutes", function() {
				expect(
					TimeBlock.starttime.day() === day &&
					TimeBlock.endtime.day() === day
					).toBe(true);
				expect(
					TimeBlock.starttime.hour() === s_hour &&
					TimeBlock.endtime.hour()   === e_hour
					).toBe(true);
				expect(
					TimeBlock.starttime.minute() === s_min &&
					TimeBlock.endtime.minute()   === e_min
					).toBe(true);
			});

			it ("should send endtime to the next day if 24 hours are inputted", function() {
				var TimeBlock = ScheduleHelpers.createTimeBlock(day, s_hour, s_min, 24, 0);
				expect(TimeBlock.endtime.day()).toEqual(day+1);
			})
		});

		describe('createScheduleBlock', function() {

			describe('all fields', function() {
				var sport, location, day, s_hour, s_min, e_hour, e_min;
				var ScheduleBlock;

				beforeEach(function() {
					sport = 'Basketball';
					location = ['GYM 1', 'GYM 2'];
					day = 1; // Monday;
					s_hour = 2;
					s_min = 30;
					e_hour = 3;
					e_min = 0;
					ScheduleBlock = ScheduleHelpers.createScheduleBlock(sport, location, day, s_hour, s_min, e_hour, e_min);
				});

				it('should return an object with 4 fields', function() {
					expect(ScheduleBlock instanceof Object).toBe(true);
					expect(Object.keys(ScheduleBlock).length).toEqual(4);
				});

				it('should have 4 defined fields', function() {
					expect(
						angular.isString(ScheduleBlock.sport) &&
						angular.isArray(ScheduleBlock.location) &&
						ScheduleBlock.location.length > 0 &&
						angular.isDefined(ScheduleBlock.starttime) &&
						ScheduleBlock.starttime._isAMomentObject &&
						angular.isDefined(ScheduleBlock.endtime) &&
						ScheduleBlock.endtime._isAMomentObject
						).toBe(true);
				});
			});

			describe('exclude minutes', function() {
				var sport, location, day, s_hour, s_min, e_hour, e_min;
				var ScheduleBlock;
				
				beforeEach(function() {
					sport = 'Basketball';
					location = ['GYM 1', 'GYM 2'];
					day = 1; // Monday;
					s_hour = 2;
					e_hour = 3;
					ScheduleBlock = ScheduleHelpers.createScheduleBlock(sport, location, day, s_hour, s_min, e_hour, e_min);
				});

				it('should create a ScheduleBlock', function(){
					expect(
						angular.isString(ScheduleBlock.sport) &&
						angular.isArray(ScheduleBlock.location) &&
						ScheduleBlock.location.length > 0 &&
						angular.isDefined(ScheduleBlock.starttime) &&
						ScheduleBlock.starttime._isAMomentObject &&
						angular.isDefined(ScheduleBlock.endtime) &&
						ScheduleBlock.endtime._isAMomentObject
						).toBe(true);
				});
			})
		});

		describe('filterScheduleBlocks', function() {
			var filteredScheduleBlocks;
			var rawList;
			var sportFilter, dayFilter;

			beforeEach(function(){
				rawList = ScheduleFactory.getRawList(); // Circle Dependency... but we need this list.
				sportFilter = 'Basketball';
				dayFilter = 2;
				filteredScheduleBlocks = ScheduleHelpers.filterScheduleBlocks(rawList, sportFilter, dayFilter);
			});

			it('should filter the sport properly', function() {
				for (var i = 0; i < filteredScheduleBlocks.length; i++)
				{
					expect(filteredScheduleBlocks[i].sport).toEqual(sportFilter);
					expect(filteredScheduleBlocks[i].starttime.day()).toEqual(dayFilter);
				}
			});
		});

		describe('createScheduleSummary', function() {
			var rawList;
			var filteredScheduleBlocks;
			var filteredList;
			var sportFilter, dayFilter;

			beforeEach(function() {
				rawList = ScheduleFactory.getRawList(); // Circle Dependency... but we need this list.
				sportFilter = 'Basketball';
				dayFilter = 2;
				filteredScheduleBlocks = ScheduleHelpers.filterScheduleBlocks(rawList, sportFilter, dayFilter);
				filteredList = ScheduleHelpers.createScheduleSummary(filteredScheduleBlocks);
				console.log(filteredList);
			});

			it('should be an object and contains 2 fields', function() {
				expect(Object.keys(filteredList).length).toEqual(2);
				expect(angular.isDefined(filteredList.availability) && angular.isArray(filteredList.availability) && filteredList.availability.length > 0).toBe(true);
				expect(angular.isDefined(filteredList.rawList)).toBe(true);
				expect(filteredList.rawList).toEqual(filteredScheduleBlocks);
			});
		})
	});
});