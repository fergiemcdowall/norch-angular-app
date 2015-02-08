'use strict';

/* Controllers */

var searchcatControllers = angular.module('searchcatControllers', []);

searchcatControllers.controller('SearchListCtrl', ['$scope', '$location', 'Search',
  function($scope, $location, Search) {
    console.log($location.absUrl());
    $scope.baseurl = $location.absUrl();
    $scope.$watch("searchTerm", function(){ 
      if ($scope.searchTerm) if ($scope.searchTerm.length > 2) {
        $scope.searchresult = Search.srch.query({q: $scope.searchTerm});
        $scope.matches = Search.mtch.query({beginsWith: $scope.searchTerm});
      }
    })
    $scope.orderProp = 'age';
  }]);

