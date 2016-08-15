angular
	.module('myApp')
	.factory('appFactory',function($http){
		

		function getData(){
			return $http.get('data/data.json');
		};
		return{
			getData:getData
		}
	});