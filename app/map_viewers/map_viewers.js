'use strict';

angular.module('myApp.map_viewers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/map_viewers', {
    templateUrl: 'map_viewers/map_viewers.html',
    controller: 'MapViewersCtrl'
  });
}])

.controller('MapViewersCtrl', [function() {

}]);