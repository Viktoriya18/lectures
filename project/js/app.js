(function() {
	    "use strict"
	    angular
	        .module('myApp', ['ngRoute', 'slick', 'as.sortable'])
	        .config(['$routeProvider',
	            function($routeProvider) {
	                $routeProvider
	                .when('/', {
	                    templateUrl: 'partials/home.html',
	                    controller: 'HomeController',
	                    controllerAs: 'vm'
	                })
	                .when('/about/', {
	                    templateUrl: 'partials/about.html',
	                    controller: 'AboutController',
	                    controllerAs: 'vm'
	                })
	                .when('/second/', {
	                    templateUrl: 'partials/second.html',
	                    controller: 'SecondController',
	                    controllerAs: 'vm'
	                })
	                .when('/sixth/', {
	                    templateUrl: 'partials/sixth.html',
	                    controller: 'SixthController',
	                    controllerAs: 'vm'
	                })
	                .otherwise({
	                    redirectTo: '/'
	                });
	        }]);
	})();
