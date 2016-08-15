angular
	.module('myApp')
	.controller('appController',function($scope,appFactory){
		
		$scope.apps;

		$scope.priceInfo={
			min:0,
			max:1000000
		}

		$scope.newListing={};

		$scope.add=function(newListing){
			newListing.image='default';
			$scope.apps.push(newListing);
			$scope.newListing={};
		}

		$scope.edit=function(app){
			$scope.editListing=true;
			$scope.existingListing=app;
		}

		$scope.saveEdit=function(){
			$scope.existingListing={};
			$scope.editListing=false;
		}

		$scope.delete=function(listing){
			var index = $scope.apps.indexOf(listing);
			$scope.apps.splice(index, 1);
			$scope.existingListing={};
			$scope.editListing=false;
		}

		appFactory.getData().success(function(data){
			$scope.apps=data;
		}).error(function(error){
			console.log(error);
		});
	});