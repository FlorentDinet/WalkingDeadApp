/**
 * Configure your app...
 */
(function() {

    "use strict";

    /**
     * All Module configured by Angular
     * Configure All Modules here...
     */
    angular.module('app', ['ngAnimate', 'angular-loading-bar', 'ngMaterial'])
        .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
            cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Loading...</div>';
            cfpLoadingBarProvider.parentSelector = '#loading-bar-container';

        }]);


}());
