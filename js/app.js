var app = angular.module('myApp', ['ngAnimate',"ngRoute"]);

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
    };
    $scope.showMe4 = false;
    $scope.myFunc4 = function() {
        $scope.showMe4 = !$scope.showMe4;
    };
    $scope.myFunc5 = function(myE) {
        $scope.x = myE.clientX;
        $scope.y = myE.clientY;
    };
    // You can pass the $event object as an argument when calling the function.
    // The $event object contains the browser's event object
});
app.controller('formCtrl184', function($scope) {
    $scope.original = {firstName: "Roger", lastName: "Federer"};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.original);
    };
    $scope.reset();
});
/*
**Form State and Input State
AngularJS is constantly updating the state of both the form and the input fields.
Input fields have the following states:
    $untouched The field has not been touched yet
    $touched The field has been touched
    $pristine The field has not been modified yet
    $dirty The field has been modified
    $invalid The field content is not valid
    $valid The field content is valid
They are all properties of the input field, and are either true or false.

Forms have the following states:
    $pristine No fields have been modified yet
    $dirty One or more have been modified
    $invalid The form content is not valid
    $valid The form content is valid
    $submitted The form is submitted
They are all properties of the form, and are either true or false.

**CSS Classes
AngularJS adds CSS classes to forms and input fields depending on their states.
The classes are removed if the value they represent is false.
The following classes are added to, or removed from, input fields:
    ng-untouched The field has not been touched yet
    ng-touched The field has been touched
    ng-pristine The field has not been  modified yet
    ng-dirty The field has been modified
    ng-valid The field content is valid
    ng-invalid The field content is not valid
    ng-valid-key One key for each validation. Example: ng-valid-required, useful when there are more than one thing that must be validated
    ng-invalid-key Example: ng-invalid-required

The following classes are added to, or removed from, forms:
    ng-pristine No fields has not been modified yet
    ng-dirty One or more fields has been modified
    ng-valid The form content is valid
    ng-invalid The form content is not valid
    ng-valid-key One key for each validation. Example: ng-valid-required, useful when there are more than one thing that must be validated
    ng-invalid-key Example: ng-invalid-required
*/
app.directive('myDirective194', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attr, mCtrl) {
      function myValidation(value) {
        if (value.indexOf("e") > -1) {
          mCtrl.$setValidity('charE', true);
        } else {
          mCtrl.$setValidity('charE', false);
        }
        return value;
      }
      mCtrl.$parsers.push(myValidation);
    }
  };
});
/* In the JavaScript we start by adding a new directive named myDirective.
Remember, when naming a directive, you must use a camel case name, myDirective, but when invoking it, you must use - separated name, my-directive.
Then, return an object where you specify that we require  ngModel, which is the ngModelController.
Make a linking function which takes some arguments, where the fourth argument, mCtrl, is the ngModelController,
Then specify a function, in this case named myValidation, which takes one argument, this argument is the value of the input element.
Test if the value contains the letter "e", and set the validity of the model controller to either true or false.
At last, mCtrl.$parsers.push(myValidation); will add the myValidation function to an array of other functions, which will be executed every time the input value changes. */
app.controller('validateCtrl195', function($scope) {
    $scope.user = 'Jay Bruce';
    $scope.email = 'jay.bruce@gmail.com';
});
app.controller('myCtrl20', function($scope) {
    $scope.x = "Matt LeBlanc";
    $scope.func201 = () => angular.lowercase($scope.x);
    $scope.func202 = () => angular.uppercase($scope.x);
    $scope.func203 = () => angular.isString($scope.x);
    $scope.func204 = () => angular.isNumber($scope.x);
});
app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'https://tryit.w3schools.com/**',
    '**'
  ]);
});
// By default, the ng-include directive does not allow you to include files from other domains.
// To include files from another domain, you can add a whitelist of legal files and/or domains in the config function of your application ('**' allows all domain)

// The ngAnimate module adds and removes classes.
// The ngAnimate module does not animate your HTML elements, but when ngAnimate notice certain events, like hide or show of an HTML element, the element gets some pre-defined classes which can be used to make animations.
// The directives in AngularJS who add/remove classes are:
//     ng-show,ng-hide,ng-class,ng-view,ng-include,ng-repeat,ng-if,ng-switch
// The ng-show and ng-hide directives adds or removes a ng-hide class value.
// The other directives adds a ng-enter class value when they enter the DOM, and a ng-leave attribute when they are removed from the DOM.
// The ng-repeat directive also adds a ng-move class value when the HTML element changes position.
// In addition, during the animation, the HTML element will have a set of class values, which will be removed when the animation has finished. Example: the ng-hide directive will add these class values:
//     ng-animate
//     ng-hide-animate
//     ng-hide-add (if the element will be hidden)
//     ng-hide-remove (if the element will be showed)
//     ng-hide-add-active (if the element will be hidden)
//     ng-hide-remove-active (if the element will be showed)

app.config(function($routeProvider) {
  $routeProvider
  .when("/london", {
    templateUrl : "london.htm",
    controller : "londonCtrl"
  })
  .when("/paris", {
    templateUrl : "paris.htm",
    controller : "parisCtrl"
  })
  .otherwise({
    template : "<h1>Main</h1><h3>No city has been chosen. New York is great!</h3>"
  });
});
app.controller("londonCtrl", function ($scope) {
    $scope.msg = "I love London";
});
app.controller("parisCtrl", function ($scope) {
    $scope.msg = "I love Paris";
});
/*The otherwise method is the default route when none of the others get a match.*/

app.controller("myCtrl24", function($scope) {
    $scope.products = ['apple', 'can tuna', 'ice cream'];
    $scope.addItem = function() {
        $scope.dupItemMsg = "";
        if (!$scope.newItem) { return; }
        if ($scope.products.indexOf($scope.newItem)===-1) {
            $scope.products.push($scope.newItem);
        } else {
            $scope.dupItemMsg = "The item is alreay in your shopping list.";
        }
    }
    $scope.removeItem = function(i) {
        $scope.dupItemMsg = "";
        $scope.products.splice(i,1);
    }
});
