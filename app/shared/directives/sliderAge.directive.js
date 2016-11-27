(function() {

    "use strict";

    /**
     * All Module configured by Angular
     * Configure All Modules here...
     */
    angular.module('app').directive('sliderAge', function () {
            return {
                restrict: 'E',
                scope: false,
                templateUrl: 'app/shared/directives/sliderAge.directive.html'
            };
        });

})();