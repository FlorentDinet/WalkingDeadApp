/**
 * First Controller
 */
(function() {

    "use strict";

    angular.module('app').controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['users'];

    /**
     * Include a Factory: Best Practise
     * Factory Resolving by Routing.
     * Cela signifie que la Factory est chargé avant que la page se charge
     */
    function mainCtrl(users) {
        var vm = this;
        vm.title = "Hello Angular by StyleGuide";
        vm.users = users;
    }

}());