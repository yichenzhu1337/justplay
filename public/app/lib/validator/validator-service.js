angular.module('validator', [])
.factory('Validator', function() {
	return Validator;
})
.factory('Validator.Assert', function() {
	return Validator.Assert;
})
.factory('Validator.Constraint', function() {
	return Validator.Constraint;
});
