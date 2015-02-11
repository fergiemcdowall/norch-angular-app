'use strict';

/* Controllers */

var searchcatControllers = angular.module('searchcatControllers', ['ui.bootstrap']);

searchcatControllers.controller('SearchListCtrl', ['$sce', '$http', '$scope', '$location', 'Search',
  function($sce, $http, $scope, $location, Search) {
    var queryObject = $location.search();
    $scope.searchTerm = queryObject['q'] || '';


    $scope.matcher = function(suggestion) {
      return $http.get("http://localhost:3030/matcher?beginsWith=" + suggestion)
        .then(function (response) {
          return response.data;
        });
    };


    //watch the search box
    $scope.$watch("searchTerm", function(){ 
      if ($scope.searchTerm) if ($scope.searchTerm.length > 2) {
        queryObject['q'] = $scope.searchTerm;
        queryObject['teaser'] = 'body';
        $scope.searchresult = Search.srch.query(queryObject);
//        $scope.matches = Search.mtch.query({beginsWith: $scope.searchTerm});
      }
    })


    //for the facet/filter links
    $scope.getFilterUrl = function(facetGroupTitle, facetEntry, filters) {
      var url = '/app/#/search?q=' 
        + $scope.searchTerm
        + '&filter[' + facetGroupTitle + '][]=' + facetEntry.key;
      for (var filterCat in filters) {
        for (var i in filters[filterCat]) {
          url += '&filter[' + filterCat + '][]=' + filters[filterCat][i];
        }
      }
      return url;
    };


    //for the [remove] links
    $scope.getUnFilterUrl = function(facetGroupTitle, facetEntry) {
      return unescape($location.absUrl()).replace
      ('&filter[' + facetGroupTitle + '][]=' + facetEntry.key, '');
    };

    $scope.trustworthy = function(html) {
      return $sce.trustAsHtml(html);
    };

    $scope.orderProp = 'age';
  }]);
