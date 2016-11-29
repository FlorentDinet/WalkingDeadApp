/**
 * First Controller
 */
(function () {

    "use strict";

    angular.module('app')
        .controller('mainCtrl', mainCtrl)
        .filter('birthdayShaker', function () {
            // In the return function, we must pass in a single parameter which will be the data we will work on.
            // We have the ability to support multiple other parameters that can be passed into the filter optionally
            return function (input, today) {
                /*                console.log("tri en cours");
                                console.log(input);
                                console.log("today", (today.getMonth() + 2));*/

                input.forEach(function (user) {
                    if (user.naissance.slice(3, 5) == (today.getMonth() + 2)) {
/*                        console.log("BIRTHDAY");*/
                        user.isBirthday = true;
                    }
                });
                return input;
            };


        });
        /*.directive('sliderAge', function () {
            return {
                restrict: 'E',
                scope: false,
                templateUrl: 'app/shared/directives/sliderAge.html'
            };
        });
*/
    mainCtrl.$inject = ['users', '$mdToast', '$scope'];

    /**
     * Include a Factory: Best Practise
     * Factory Resolving by Routing.
     * Cela signifie que la Factory est chargé avant que la page se charge
     */

    function mainCtrl(users, $mdToast, $scope) {
        var vm = this;
        vm.title = "Hello Angular by StyleGuide";
        vm.users = users;
        $scope.users = users;
        vm.idCount = 0;
        vm.items = [1, 2, 3, 4, 5, 6, 7];
        vm.selected = [];
        // Filtering variables
        vm.genderFiltered = {
            sexe: ""
        };
        vm.pseudoFiltered = {
            pseudo: ""
        };
        vm.ageFiltered = 80;
        vm.ageFiltering = function (character) {
/*            console.log("annee" + character.naissance.slice(6, 10));*/
            return character.naissance.slice(6, 10) >= (2016 - vm.ageFiltered);
        };
        vm.today = new Date();

        vm.toggle = function (item, list) {
            var idx = list.indexOf(item);
            if (idx > -1) {
                list.splice(idx, 1);
            } else {
                list.push(item);
            }
        };

        vm.exists = function (item, list) {
            return list.indexOf(item) > -1;
        };

        vm.form = {
            id: 0,
            pseudo: "",
            sexe: "",
            photo: "",
            activite: "",
            naissance: "",
            coord: {
                lat: null,
                long: null
            },
            pays: "",
            resume: "",
            saison: [],
            isBirthday: false
        };

        vm.deleteUser = function (user) {
            console.log(user);
            var id = vm.users.indexOf(user);
            vm.users.splice(id, 1);
            // TOAST
            vm.showSimpleToast(user);
        };

        vm.showSimpleToast = function (msg) {
            var pinTo = "top right";
            console.log(pinTo);
            $mdToast.show(
                $mdToast.simple()
                .textContent(msg.pseudo + " has been killed")
                .position(pinTo)
                .hideDelay(3000)
            );
        };

        vm.addCharacter = function () {
            console.log('formulaire envoyé');
            console.log(vm.form);
            vm.users.push({
                id: vm.users.length + 1,
                pseudo: vm.form.pseudo,
                sexe: vm.form.sexe,
                photo: vm.form.photo,
                activite: vm.form.activite,
                naissance: vm.form.naissance.getDate() + "/" + vm.form.naissance.getMonth() + 1 + "/" + vm.form.naissance.getFullYear(),
                coord: vm.form.coord,
                pays: vm.form.pays,
                resume: vm.form.resume,
                saison: vm.form.saison,
                isBirthday: false
            });


            vm.form = {
                id: 0,
                pseudo: "",
                sexe: "",
                photo: "",
                activite: "",
                naissance: "",
                coord: {
                    lat: null,
                    long: null
                },
                pays: "",
                resume: "",
                saison: [],

            };


        };

        /*function evaluateForm() {
            console.log("coucou");
        }

        $scope.$watch('charForm.longitude.$valid', evaluateForm);
*/
    }

}());




/*{
    "$viewValue": null,
    "$modelValue": null,
    "$validators": {},
    "$asyncValidators": {},
    "$parsers": [null],
    "$formatters": [null, null],
    "$viewChangeListeners": [],
    "$untouched": true,
    "$touched": false,
    "$pristine": true,
    "$dirty": false,
    "$valid": false,
    "$invalid": true,
    "$error": {
        "required": true
    },
    "$name": "longitude",
    "$options": null
}*/