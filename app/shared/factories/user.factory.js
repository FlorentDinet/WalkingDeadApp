/**
 * Contact Controller
 */
(function () {

    "use strict";

    angular.module('app').factory('UserFcty', UserFcty);

    UserFcty.$inject = ['$log', '$q', '$http'];


    /**
     * Handler User
     */
    function UserFcty($log, $q, $http) {

        var obj = {
            all: getAll,
            one: getOne,
            users: null
        };

        return obj;

        /**
         * get All User
         */
        function getAll() {

            var deferred = $q.defer();

            if (obj.users) {
                console.log("obj.users existe");
                deferred.resolve(obj.users);
            } else {
                $http.get('data/walkingDeadCharacters.json')
                    .success(function (data) {
                        obj.users = data;
                        console.log("obj.users", obj.users)
                        deferred.resolve(obj.users);
                        $log.info('API chargée');
                    }).error(deferred.reject);
            }
            return deferred.promise; //return a promise with $q library (not exist in ES5)
        }
        /**
         * get one User
         */
        function getOne(id) {
            var deferred = $q.defer();
            obj.all().then(function () {
                obj.users.forEach(function (user) {
                    if(user.id == id) {
                        console.log("on a trouvé le bon : ",user.id)
                    deferred.resolve(user);
                    }
                });
            });
            return deferred.promise;
        }
    }



}());