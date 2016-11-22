/**
 * Filter
 */
(function() {

    "use strict";

    angular.module('app').directive("map", map);


    function map() {

        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            scope: { users: '=users', coords: '=coords' },
            template: '<div id="map"></div>',
            link: function(scope, element, attrs) {
                var map = new google.maps.Map(document.getElementById('map'), {
                    center: scope.coords,
                    zoom: 5
                });

                var lat = 45.758260;
                var long = 4.855387;
                scope.users.forEach(function(element) {

                    var contentString = '<div id="content">' +
                        element.name +
                        '</div>';

                    var infowindow = new google.maps.InfoWindow({
                        content: contentString
                    });


                    lat++; //exemple
                    long++;
                    var marker = new google.maps.Marker({
                        position: { lat: lat, lng: long },
                        map: map,
                        title: element.name
                    });
                    marker.addListener('click', function() {
                        infowindow.open(map, marker);
                    });
                    // To add the marker to the map, call setMap();
                    marker.setMap(map);
                });



            }

        };
    }


}());