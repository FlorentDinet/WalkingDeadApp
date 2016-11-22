/**
 * Filter
 */
(function() {

    "use strict";

    /**
     * 1ere syntaxe
     * Just a filter to render HTML in view
     * @returns
     * */
    angular.module('app').filter("trust", ['$sce', function($sce) {
        return function(htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        }
    }]);


    /**
     * 2eme syntax
     * Filter Website to display link
     */

    angular.module('app').filter('website', website);

    function website() {

        return function(input) {
            var link = "<a href=" + input + ">" + input + "</a>";
            return link;
        }
    }

}());