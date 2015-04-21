'use strict';

angular.module('myApp.map_services', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/map_services', {
    templateUrl: 'map_services/map_services.html',
    controller: 'MapServicesCtrl'
  });
}])

.controller('MapServicesCtrl', [function() {

}]);