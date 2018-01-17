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

    app.directive("testDirective5", function() {
        return {
            restrict: "E",
            template : "<h4>Made by a custom directive with 'E/Element' restrict!</h4>"
            };
    });

    app.directive("testDirective51", function() {
        return {
            restrict: "M",
            replace: true,
            template : "<h4>Made by a custom directive with 'M/coMment' restrict!</h4>"
            };
    });

/*  The legal restrict values are:
    E for Element name
    A for Attribute
    C for Class
    M for Comment (When replace is false, Angular puts the template content inside the comment. When replace is true, Angular replaces the comment with the template content.)
    By default the value is EA, meaning that both Element names and attribute names can invoke the directive. */

