    const app = angular.module('myApp', []);

    app.controller('myCtrl', function($scope) {
        $scope.firstName2= "John";
        $scope.lastName2= "Doe";
    });

    app.directive("testDirective", function() {
    return {
        template : "I was made in a directive constructor!"
        };
    });

