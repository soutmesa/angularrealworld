angular.module('myFirstApp', ['ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.when('/about', {
		templateUrl: 'views/about.html'
	}).when('/contact', {
		templateUrl: 'views/contact.html'
	}).otherwise({templateUrl: '404.html'})
}])
.factory('personService', function(){
	var person = {};
	person.printName = function(firstName, lastName){
		return firstName + ' ' + lastName;
	}
	return person;
})