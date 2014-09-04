describe('utilities', function()
{
	beforeEach(function(){
		angular.mock.module('jp.utilities');
	});

	describe('DateRangeService', function(){
		var DateRangeService;
		var mockRanges = {};
		var insertIntoMethod = function(obj, fn)
		{
			var range1_s, range1_e, range2_s, range2_e;
			range1_s = obj.range1_s;
			range2_s = obj.range2_s;
			range1_e = obj.range1_e;
			range2_e = obj.range2_e;

			function triggerFn(range1_s, range1_e, range2_s, range2_e)
			{
				return fn(range1_s, range1_e, range2_s, range2_e);
			}

			return triggerFn(range1_s, range1_e, range2_s, range2_e);
		};

		beforeEach(function(){
			inject(function($injector) {
				DateRangeService = $injector.get('DateRangeService');
			});

			mockRanges = {
				isWithinStartAndEnd: [
					{
						range1_s: moment(new Date()).day(1).hour(1).minute(0),
						range1_e: moment(new Date()).day(1).hour(4).minute(0),
						range2_s: moment(new Date()).day(1).hour(2).minute(0),
						range2_e: moment(new Date()).day(1).hour(3).minute(0)
					},
					{
						range1_s: moment(new Date()).day(1).hour(1).minute(0),
						range1_e: moment(new Date()).day(1).hour(3).minute(0),
						range2_s: moment(new Date()).day(1).hour(1).minute(0),
						range2_e: moment(new Date()).day(1).hour(3).minute(0)
					}
				],
				isWithinStart: [
					{
						range1_s: moment(new Date()).day(1).hour(1).minute(0),
						range1_e: moment(new Date()).day(1).hour(3).minute(0),
						range2_s: moment(new Date()).day(1).hour(1).minute(0),
						range2_e: moment(new Date()).day(1).hour(4).minute(0)					
					},
					{
						range1_s: moment(new Date()).day(1).hour(1).minute(0),
						range1_e: moment(new Date()).day(1).hour(3).minute(0),
						range2_s: moment(new Date()).day(1).hour(2).minute(0),
						range2_e: moment(new Date()).day(1).hour(4).minute(0)					
					}
				],
				isWithinEnd: [
					{
						range1_s: moment(new Date()).day(1).hour(1).minute(0),
						range1_e: moment(new Date()).day(1).hour(4).minute(0),
						range2_s: moment(new Date()).day(1).hour(0).minute(0),
						range2_e: moment(new Date()).day(1).hour(4).minute(0)
					},
					{
						range1_s: moment(new Date()).day(1).hour(1).minute(0),
						range1_e: moment(new Date()).day(1).hour(3).minute(0),
						range2_s: moment(new Date()).day(1).hour(0).minute(0),
						range2_e: moment(new Date()).day(1).hour(3).minute(0)
					}
				],
				isBeforeRange: [
					{
						range1_s: moment(new Date()).day(1).hour(3).minute(0),
						range1_e: moment(new Date()).day(1).hour(6).minute(0),
						range2_s: moment(new Date()).day(1).hour(1).minute(0),
						range2_e: moment(new Date()).day(1).hour(2).minute(0)					
					}
				],
				isAfterRange: [
					{
						range1_s: moment(new Date()).day(1).hour(3).minute(0),
						range1_e: moment(new Date()).day(1).hour(6).minute(0),
						range2_s: moment(new Date()).day(1).hour(7).minute(0),
						range2_e: moment(new Date()).day(1).hour(8).minute(0)
					}
				],
				isExactlyBeforeRange: [
					{
						range1_s: moment(new Date()).day(1).hour(3).minute(0),
						range1_e: moment(new Date()).day(1).hour(6).minute(0),
						range2_s: moment(new Date()).day(1).hour(1).minute(0),
						range2_e: moment(new Date()).day(1).hour(3).minute(0)
					}
				],
				isExactlyAfterRange: [
					{
						range1_s: moment(new Date()).day(1).hour(3).minute(0),
						range1_e: moment(new Date()).day(1).hour(6).minute(0),
						range2_s: moment(new Date()).day(1).hour(6).minute(0),
						range2_e: moment(new Date()).day(1).hour(12).minute(0)
					}
				]

			};

		});

		describe('isWithinStartAndEnd', function() {
			it ('should pass all isWithinStartAndEnd conditions', function() {
				for (var i = 0; i < mockRanges.isWithinStartAndEnd.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isWithinStartAndEnd[i], DateRangeService.isWithinStartAndEnd)).toBe(true);
				}
			});
			it ('should fail all isWithinStart conditions', function() {
				for (var i = 0; i < mockRanges.isWithinStart.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isWithinStart[i], DateRangeService.isWithinStartAndEnd)).toBe(false);				
				}
			});
			it ('should fail all isWithinEnd conditions', function() {
				for (var i = 0; i < mockRanges.isWithinEnd.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isWithinEnd[i], DateRangeService.isWithinStartAndEnd)).toBe(false);				
				}
			});
			it ('should fail all isBeforeRange conditions', function() {
				for (var i = 0; i < mockRanges.isBeforeRange.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isBeforeRange[i], DateRangeService.isWithinStartAndEnd)).toBe(false);				
				}
			});
			it ('should fail all isAfterRange conditions', function() {
				for (var i = 0; i < mockRanges.isAfterRange.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isAfterRange[i], DateRangeService.isWithinStartAndEnd)).toBe(false);				
				}
			});
			it ('should fail all isExactlyBeforeRange conditions', function() {
				for (var i = 0; i < mockRanges.isExactlyBeforeRange.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isExactlyBeforeRange[i], DateRangeService.isWithinStartAndEnd)).toBe(false);				
				}
			});
			it ('should fail all isExactlyAfterRange conditions', function() {
				for (var i = 0; i < mockRanges.isExactlyAfterRange.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isExactlyAfterRange[i], DateRangeService.isWithinStartAndEnd)).toBe(false);				
				}
			});
		});

		describe('isWithinStart', function() {
			it ('should fail all isWithinStartAndEnd conditions', function() {
				for (var i = 0; i < mockRanges.isWithinStartAndEnd.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isWithinStartAndEnd[i], DateRangeService.isWithinStart)).toBe(false);
				}
			});
			it ('should pass all isWithinStart conditions', function() {
				for (var i = 0; i < mockRanges.isWithinStart.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isWithinStart[i], DateRangeService.isWithinStart)).toBe(true);				
				}
			});
			it ('should fail all isWithinEnd conditions', function() {
				for (var i = 0; i < mockRanges.isWithinEnd.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isWithinEnd[i], DateRangeService.isWithinStart)).toBe(false);				
				}
			});
			it ('should fail all isBeforeRange conditions', function() {
				for (var i = 0; i < mockRanges.isBeforeRange.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isBeforeRange[i], DateRangeService.isWithinStart)).toBe(false);				
				}
			});
			it ('should fail all isAfterRange conditions', function() {
				for (var i = 0; i < mockRanges.isAfterRange.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isAfterRange[i], DateRangeService.isWithinStart)).toBe(false);				
				}
			});
			it ('should fail all isExactlyBeforeRange conditions', function() {
				for (var i = 0; i < mockRanges.isExactlyBeforeRange.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isExactlyBeforeRange[i], DateRangeService.isWithinStart)).toBe(false);				
				}
			});
			it ('should fail all isExactlyAfterRange conditions', function() {
				for (var i = 0; i < mockRanges.isExactlyAfterRange.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isExactlyAfterRange[i], DateRangeService.isWithinStart)).toBe(false);				
				}
			});
		});

		describe('isWithinEnd', function() {
			it ('should fail all isWithinStartAndEnd conditions', function() {
				for (var i = 0; i < mockRanges.isWithinStartAndEnd.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isWithinStartAndEnd[i], DateRangeService.isWithinEnd)).toBe(false);
				}
			});
			it ('should pass all isWithinStart conditions', function() {
				for (var i = 0; i < mockRanges.isWithinStart.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isWithinStart[i], DateRangeService.isWithinEnd)).toBe(false);				
				}
			});
			it ('should pass all isWithinEnd conditions', function() {
				for (var i = 0; i < mockRanges.isWithinEnd.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isWithinEnd[i], DateRangeService.isWithinEnd)).toBe(true);				
				}
			});
			it ('should fail all isBeforeRange conditions', function() {
				for (var i = 0; i < mockRanges.isBeforeRange.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isBeforeRange[i], DateRangeService.isWithinEnd)).toBe(false);				
				}
			});
			it ('should fail all isAfterRange conditions', function() {
				for (var i = 0; i < mockRanges.isAfterRange.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isAfterRange[i], DateRangeService.isWithinEnd)).toBe(false);				
				}
			});
			it ('should fail all isExactlyBeforeRange conditions', function() {
				for (var i = 0; i < mockRanges.isExactlyBeforeRange.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isExactlyBeforeRange[i], DateRangeService.isWithinEnd)).toBe(false);				
				}
			});
			it ('should fail all isExactlyAfterRange conditions', function() {
				for (var i = 0; i < mockRanges.isExactlyAfterRange.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isExactlyAfterRange[i], DateRangeService.isWithinEnd)).toBe(false);				
				}
			});
		});

		describe('isBeforeRange', function() {
			it ('should fail all isWithinStartAndEnd conditions', function() {
				for (var i = 0; i < mockRanges.isWithinStartAndEnd.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isWithinStartAndEnd[i], DateRangeService.isBeforeRange)).toBe(false);
				}
			});
			it ('should pass all isWithinStart conditions', function() {
				for (var i = 0; i < mockRanges.isWithinStart.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isWithinStart[i], DateRangeService.isBeforeRange)).toBe(false);				
				}
			});
			it ('should pass all isWithinEnd conditions', function() {
				for (var i = 0; i < mockRanges.isWithinEnd.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isWithinEnd[i], DateRangeService.isBeforeRange)).toBe(false);				
				}
			});
			it ('should fail all isBeforeRange conditions', function() {
				for (var i = 0; i < mockRanges.isBeforeRange.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isBeforeRange[i], DateRangeService.isBeforeRange)).toBe(true);				
				}
			});
			it ('should fail all isAfterRange conditions', function() {
				for (var i = 0; i < mockRanges.isAfterRange.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isAfterRange[i], DateRangeService.isBeforeRange)).toBe(false);				
				}
			});
			it ('should fail all isExactlyBeforeRange conditions', function() {
				for (var i = 0; i < mockRanges.isExactlyBeforeRange.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isExactlyBeforeRange[i], DateRangeService.isBeforeRange)).toBe(false);				
				}
			});
			it ('should fail all isExactlyAfterRange conditions', function() {
				for (var i = 0; i < mockRanges.isExactlyAfterRange.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isExactlyAfterRange[i], DateRangeService.isBeforeRange)).toBe(false);				
				}
			});
		});

		describe('isAfterRange', function() {
			it ('should fail all isWithinStartAndEnd conditions', function() {
				for (var i = 0; i < mockRanges.isWithinStartAndEnd.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isWithinStartAndEnd[i], DateRangeService.isAfterRange)).toBe(false);
				}
			});
			it ('should pass all isWithinStart conditions', function() {
				for (var i = 0; i < mockRanges.isWithinStart.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isWithinStart[i], DateRangeService.isAfterRange)).toBe(false);				
				}
			});
			it ('should pass all isWithinEnd conditions', function() {
				for (var i = 0; i < mockRanges.isWithinEnd.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isWithinEnd[i], DateRangeService.isAfterRange)).toBe(false);				
				}
			});
			it ('should fail all isBeforeRange conditions', function() {
				for (var i = 0; i < mockRanges.isBeforeRange.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isBeforeRange[i], DateRangeService.isAfterRange)).toBe(false);				
				}
			});
			it ('should fail all isAfterRange conditions', function() {
				for (var i = 0; i < mockRanges.isAfterRange.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isAfterRange[i], DateRangeService.isAfterRange)).toBe(true);				
				}
			});
			it ('should fail all isExactlyBeforeRange conditions', function() {
				for (var i = 0; i < mockRanges.isExactlyBeforeRange.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isExactlyBeforeRange[i], DateRangeService.isAfterRange)).toBe(false);				
				}
			});
			it ('should fail all isExactlyAfterRange conditions', function() {
				for (var i = 0; i < mockRanges.isExactlyAfterRange.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isExactlyAfterRange[i], DateRangeService.isAfterRange)).toBe(false);				
				}
			});
		});

		describe('isExactlyBeforeRange', function(){
			it ('should fail all isWithinStartAndEnd conditions', function() {
				for (var i = 0; i < mockRanges.isWithinStartAndEnd.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isWithinStartAndEnd[i], DateRangeService.isExactlyBeforeRange)).toBe(false);
				}
			});
			it ('should pass all isWithinStart conditions', function() {
				for (var i = 0; i < mockRanges.isWithinStart.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isWithinStart[i], DateRangeService.isExactlyBeforeRange)).toBe(false);				
				}
			});
			it ('should pass all isWithinEnd conditions', function() {
				for (var i = 0; i < mockRanges.isWithinEnd.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isWithinEnd[i], DateRangeService.isExactlyBeforeRange)).toBe(false);				
				}
			});
			it ('should fail all isBeforeRange conditions', function() {
				for (var i = 0; i < mockRanges.isBeforeRange.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isBeforeRange[i], DateRangeService.isExactlyBeforeRange)).toBe(false);				
				}
			});
			it ('should fail all isAfterRange conditions', function() {
				for (var i = 0; i < mockRanges.isAfterRange.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isAfterRange[i], DateRangeService.isExactlyBeforeRange)).toBe(false);				
				}
			});
			it ('should fail all isExactlyBeforeRange conditions', function() {
				for (var i = 0; i < mockRanges.isExactlyBeforeRange.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isExactlyBeforeRange[i], DateRangeService.isExactlyBeforeRange)).toBe(true);				
				}
			});
			it ('should fail all isExactlyAfterRange conditions', function() {
				for (var i = 0; i < mockRanges.isExactlyAfterRange.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isExactlyAfterRange[i], DateRangeService.isExactlyBeforeRange)).toBe(false);				
				}
			});
		});

		describe('isExactlyAfterRange', function(){
			it ('should fail all isWithinStartAndEnd conditions', function() {
				for (var i = 0; i < mockRanges.isWithinStartAndEnd.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isWithinStartAndEnd[i], DateRangeService.isExactlyAfterRange)).toBe(false);
				}
			});
			it ('should pass all isWithinStart conditions', function() {
				for (var i = 0; i < mockRanges.isWithinStart.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isWithinStart[i], DateRangeService.isExactlyAfterRange)).toBe(false);				
				}
			});
			it ('should pass all isWithinEnd conditions', function() {
				for (var i = 0; i < mockRanges.isWithinEnd.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isWithinEnd[i], DateRangeService.isExactlyAfterRange)).toBe(false);				
				}
			});
			it ('should fail all isBeforeRange conditions', function() {
				for (var i = 0; i < mockRanges.isBeforeRange.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isBeforeRange[i], DateRangeService.isExactlyAfterRange)).toBe(false);				
				}
			});
			it ('should fail all isAfterRange conditions', function() {
				for (var i = 0; i < mockRanges.isAfterRange.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isAfterRange[i], DateRangeService.isExactlyAfterRange)).toBe(false);				
				}
			});
			it ('should fail all isExactlyBeforeRange conditions', function() {
				for (var i = 0; i < mockRanges.isExactlyBeforeRange.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isExactlyBeforeRange[i], DateRangeService.isExactlyAfterRange)).toBe(false);				
				}
			});
			it ('should fail all isExactlyAfterRange conditions', function() {
				for (var i = 0; i < mockRanges.isExactlyAfterRange.length; i++)
				{
					expect(insertIntoMethod(mockRanges.isExactlyAfterRange[i], DateRangeService.isExactlyAfterRange)).toBe(true);				
				} 
			});
		});
	});
});