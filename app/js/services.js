'use strict';

/* Services */

var searchcatServices = angular.module('searchcatServices', ['ngResource']);

searchcatServices.factory('Search', ['$resource',
  function($resource){
    return {
      srch: $resource('http://localhost:3030/search', {facets:'topics,places,organisations'}, {
        query: { method: 'GET', params: {'pagesize': 100}, isArray: false }
      }),
      mtch: $resource('http://localhost:3030/matcher', {}, {
        query: { method: 'GET', params: {}, isArray: true }
      }),
    }
  }]);

