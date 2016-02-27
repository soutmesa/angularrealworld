angular.module('myFirstApp', ['ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.when('/about/:param', {
		templateUrl: 'views/about.html',
		controller: 'AboutCtrl'
	}).when('/contact/:param1', {
		templateUrl: 'views/contact.html',
		controller: 'ContactCtrl'
	}).otherwise({templateUrl: '404.html'})
}])
.factory('personService', function(){
	var person = {};
	person.printName = function(firstName, lastName){
		return firstName + ' ' + lastName;
	}
	return person;
})