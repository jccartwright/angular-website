'use strict';

angular.module('myApp.wms_services', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/wms_services', {
    templateUrl: 'wms_services/wms_services.html',
    controller: 'WmsServicesCtrl'
  });
}])

.controller('WmsServicesCtrl', [function() {

}]);