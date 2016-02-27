angular.module('myFirstApp', ['ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.when('/', {
		templateUrl: 'index.html'
	}).when('/about', {
		templateUrl: 'views/about.html'
	}).when('/contact', {
		templateUrl: 'views/contact.html'
	}).otherwise({templateUrl: 'views/404.html'})
	// $locationProvider.html5Mode({
	// 	enabled: true,
 //  		requireBase: false
	// });
}])
.factory('personService', function(){
	var person = {};
	person.printName = function(firstName, lastName){
		return firstName + ' ' + lastName;
	}
	return person;
})