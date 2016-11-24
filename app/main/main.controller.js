/**
 * First Controller
 */
(function() {

    "use strict";

    angular.module('app').controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['users','$mdToast'];

    /**
     * Include a Factory: Best Practise
     * Factory Resolving by Routing.
     * Cela signifie que la Factory est chargé avant que la page se charge
     */

    function mainCtrl(users, $mdToast) {
        var vm = this;
        vm.title = "Hello Angular by StyleGuide";
        vm.users = users;
        console.log(users);

        var snackbarContainer = document.querySelector('#demo-toast-example');

        vm.deleteUser = function(user) {
            console.log(user);
            var id = vm.users.indexOf(user);
            vm.users.splice(id, 1);
            // TOAST
            vm.showSimpleToast(user);
        };



        vm.showSimpleToast = function(msg) {
            var pinTo = "top right";
            console.log(pinTo);
            $mdToast.show(
                $mdToast.simple()
                .textContent(msg.pseudo+" has been killed")
                .position(pinTo)
                .hideDelay(3000)
            );
        };


    }

}());
