'use strict';

function sliderDirective($timeout: ng.ITimeoutService): ng.IDirective {
    return {
        scope: false,
        restrict: 'A',
        link: (scope, element, attrs) => {
            scope.$watch((<any> attrs).slider, function(value) {
                $timeout(function() {
                    $(element[0]).slider({
                        values: [10, 90],
                        range: true
                    });
                }, 1);
            });
        }
    }
}

angular.module("auction").directive('slider', ["$timeout", sliderDirective]);