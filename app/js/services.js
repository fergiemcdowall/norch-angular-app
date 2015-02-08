'use strict';

/* Services */

var searchcatServices = angular.module('searchcatServices', ['ngResource']);

searchcatServices.factory('Search', ['$resource',
  function($resource){
    return $resource('http://localhost:3030/search', {facets:'topics,places,organisations'});
  }]);

