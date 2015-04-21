'use strict';

angular.module('myApp.mapViewers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/map_viewers', {
        templateUrl: 'map_viewers/map_viewers.html',
        controller: 'MapViewersCtrl'
    });
}])

.controller('MapViewersCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('map_viewers/viewers.json').success(function(data) {
            $scope.viewers = data;
            console.log(data);
        });
}]);