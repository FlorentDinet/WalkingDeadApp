/**
 * Another Contact Controller
 */
(function() {

    "use strict";

    angular.module('app').controller('contactCtrl', contactCtrl);

    function contactCtrl() {
        var vm = this;
        vm.submitForm = submitForm;
        vm.title = "Page de Contact";

        // function to submit the form after all validation has occurred            
        function submitForm(isValid) {
            // check to make sure the form is completely valid
            if (isValid) {
                alert('our form is amazing');
            }
        }

    }

}());