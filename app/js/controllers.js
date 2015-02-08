'use strict';

/* Controllers */

var searchcatControllers = angular.module('searchcatControllers', []);

searchcatControllers.controller('SearchListCtrl', ['$scope', 'Search',
  function($scope, Search) {
    $scope.$watch("searchTerm", function(){ 
      if ($scope.searchTerm) if ($scope.searchTerm.length > 2)
        $scope.searches = Search.get({q: $scope.searchTerm});
//        $scope.matches = Search.mtch({beginsWith: $scope.searchTerm});
    })
    $scope.orderProp = 'age';
  }]);

