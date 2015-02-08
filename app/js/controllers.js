'use strict';

/* Controllers */

var searchcatControllers = angular.module('searchcatControllers', []);

searchcatControllers.controller('SearchListCtrl', ['$scope', '$location', 'Search',
  function($scope, $location, Search) {
    var queryObject = $location.search();
    $scope.searchTerm = queryObject['q'] || '';
    $scope.$watch("searchTerm", function(){ 
      if ($scope.searchTerm) if ($scope.searchTerm.length > 2) {
        queryObject['q'] = $scope.searchTerm;
        console.log(queryObject);
        $scope.baseurl = $location.absUrl() + '?q=' + queryObject['q'];
        $scope.searchresult = Search.srch.query(queryObject);
        $scope.matches = Search.mtch.query({beginsWith: $scope.searchTerm});
      }
    })
    $scope.orderProp = 'age';
  }]);

