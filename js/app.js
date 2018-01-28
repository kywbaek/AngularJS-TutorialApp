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
    $scope.names = ['Jani','Carl','Margareth','Hege','Joe','Gustav','Birgit','Mary','Kai'];
});

app.filter('myFormat108', function() {
    return function(x) {
        let i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i % 2 == 0) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
});

app.controller('myCtrl111', function($scope, $location) {
    $scope.myUrl = $location.absUrl();
});
// ~= window.location
// Note that the $location service is passed in to the controller as an argument. In order to use the service in the controller, it must be defined as a dependency.

app.controller('myCtrl112', function($scope, $http) {
  $http.get("httpServiceTest.htm").then(function (response) {
      $scope.myWelcome = response.data;
      $scope.statuscode = response.status;
      $scope.statustext = response.statusText;
  }, function(response) {
    $scope.myWelcome = "There are errors";
  });
});
/* The $http service requests a page on the server, and the response is set as the value of the "myWelcome" variable.
The response from the server is an object with these properties:

.config    : the object used to generate the request.
.data      : a string, or an object, carrying the response from the server.
.headers   : a function to use to get header information.
.status    : a number defining the HTTP status.
.statusText: a string defining the HTTP status.
To handle errors, add one more functions to the .then method
*/
app.controller('myCtrl113', function($scope, $timeout) {
  $scope.myHeader = "Hello World!";
  $timeout(function () {
      $scope.myHeader = "How are you today?";
  }, 2000);
});
// The $timeout service is AngularJS' version of the window.setTimeout function.The $timeout service runs a function after a specified number of milliseconds.
app.controller('myCtrl114', function($scope, $interval) {
  $scope.theTime = new Date().toLocaleTimeString();
  $interval(function () {
      $scope.theTime = new Date().toLocaleTimeString();
  }, 1000);
});
// The $interval service is AngularJS' version of the window.setInterval function. The $interval service runs a function every specified millisecond.

app.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});
app.filter('myFormat115',['hexafy', function(hexafy) {
    return function(x) {
        return hexafy.myFunc(x);
    };
}]);
app.controller('myCtrl115', function($scope) {
    $scope.counts = [255, 251, 200];
});
// This filter uses a custom service that converts numbers into hexadecimal values.

app.controller('myCtrl122', function($scope, $http) {
    $http({
        method : "GET",
        url : "httpServiceTest.htm"
    }).then(function mySuccess(response) {
        $scope.myWelcome = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
});
app.controller('customersCtrl123', function($scope, $http) {
    $http.get("https://www.w3schools.com/angular/customers.php").then(function(response) {
        $scope.myData = response.data.records;
    });
});
/* $http is an XMLHttpRequest object for requesting external data.
   $http.get() reads JSON data from https://www.w3schools.com/angular/customers.php.
   On success, the controller creates a property, myData, in the scope, with JSON data from the server. "records" is a 'key' of the JSON data. */
app.controller('myCtrl14', function($scope) {
    $scope.names = ["Emil", "Tobias", "Linus"];
    $scope.cars = [{model : "Ford Mustang", color : "red"},
                    {model : "Fiat 500", color : "white"},
                    {model : "Volvo XC90", color : "black"}
                    ];
    $scope.carsObj = {car01 : "Ford",
                    car02 : "Fiat",
                    car03 : "Volvo"
                    };
    $scope.carsObj2 = {car01 : {brand : "Ford", model : "Mustang", color : "red"},
                    car02 : {brand : "Fiat", model : "500", color : "white"},
                    car03 : {brand : "Volvo", model : "XC90", color : "black"}
                    };
});
app.controller('customersCtrl15', function($scope, $http) {
    $http.get("https://www.w3schools.com/angular/customers_sql.aspx")
    .then(function (response) {$scope.names = response.data.records;});
});
app.controller('myCtrl17', function($scope) {
    $scope.count1 = 0;
    $scope.count2 = 0;
    $scope.myFunction3 = function() {
    $scope.count2++;
    }
});
