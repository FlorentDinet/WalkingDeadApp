/**
 * All Routing
 */
(function() {

    'use strict';

    /**
     * All Routing here...
     * Each Route can resolve some datas before send in controller
     */
    angular.module('app', ['ngRoute' ,'ngMaterial','ngMessages','ngAnimate']).config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'mainCtrl',
                controllerAs: 'main', // with alias in view for ANgular StyleGuide
                resolve: { // resolve Factory before display view and send by injection in controller
                    users: function(UserFcty) {
                        return UserFcty.all();
                    }
                }
            })
            .when('/contact', {
                templateUrl: 'app/contact/contact.html',
                controller: 'contactCtrl',
                controllerAs: 'contact'
            });
    }).config(function($mdThemingProvider) {

    // Configure a dark theme with primary foreground yellow

    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('lime')
      .accentPalette('lime')
      .dark();

  });


}());
