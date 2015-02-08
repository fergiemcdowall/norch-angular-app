'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    console.log($scope.searchTerm)
    $scope.$watch("searchTerm", function(){
      if ($scope.searchTerm.length > 2)
        $scope.phones = Phone.get({q: $scope.searchTerm});
    })
    $scope.orderProp = 'age';
  }]);

