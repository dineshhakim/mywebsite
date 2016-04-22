// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var uraApp = angular.module('uraApp', ['ngRoute']);

    // configure our routes
    uraApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                title:"Home",
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                title:"About",
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                title:"Contact",
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope
    uraApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    uraApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    uraApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
    uraApp.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
    }]);