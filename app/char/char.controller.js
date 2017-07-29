/**
 * First Controller
 */
(function () {

    "use strict";

    angular.module('app')
        .controller('charCtrl', charCtrl);
        

    charCtrl.$inject = ['user'];

    /**
     * Include a Factory: Best Practise
     * Factory Resolving by Routing.
     * Cela signifie que la Factory est chargé avant que la page se charge
     */

    function charCtrl(user) {
        var vm = this;

        console.log(user);
        vm.user = user;


   
    }    

}());

