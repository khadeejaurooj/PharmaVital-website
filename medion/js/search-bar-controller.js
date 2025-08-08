angular.module('myApp', []) 
.controller('SearchBarController', function($scope) 
{ $scope.searchText = ""; 
$scope.search = function() {  
    console.log("Search term:", $scope.searchText); } })