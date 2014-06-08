var module = angular.module('utilityDirectives', [])
.value("filterRegex", 'EEEE, MMM d');

var factories = {};
var services = {};
var controllers = {};
var directives = {};

directives.toNumber = function () {
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            ctrl.$parsers.push(function (value) {
                return parseFloat(value || '');
            });
        }
    };
};

module.factory(factories);
module.controller(controllers);
module.service(services);
module.directive(directives);
