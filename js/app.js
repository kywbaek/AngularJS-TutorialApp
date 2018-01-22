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

app.controller('myCtrl7', function($scope) {
    $scope.name= "Michael Jordan??";
    $scope.changeName = function() {
        $scope.name = "Stephen Curry!!";
    }
});

app.controller('personCtrl81', function($scope) {
    $scope.firstName = "Chris";
    $scope.lastName = "Paul";
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    };
});

app.controller('namesCtrl82', function($scope) {
    $scope.names = [
        {name:'Tony Parker',country:'France'},
        {name:'Pao Gasol',country:'Spain'},
        {name:'Manu Ginobli',country:'Argentina'}
    ];
});

app.run(function($rootScope) {
    $rootScope.color = 'blue';
});

app.controller('myCtrl91', function($scope) {
    $scope.color = "red";
});

app.controller('personCtrl101', function($scope) {
    $scope.lastName = "Anderson";
});

app.controller('namesCtrl103', function($scope) {
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
        ];
    $scope.orderByMe = function(x) {
    $scope.myOrderBy = x;
  }
});

app.controller('costCtrl104', function($scope) {
    $scope.price = 99;
});

app.controller('namesCtrl105', function($scope) {
    $scope.names = [
        'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
    ];
});
