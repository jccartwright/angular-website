'use strict';

describe('myApp.mapViewers module', function() {

  beforeEach(module('myApp.mapViewers'));

  describe('MapViewers controller', function(){

    it('should ....', inject(function($controller) {
      var scope = {};
      //spec body
      var mapViewersCtrl = $controller('MapViewersCtrl', {$scope:scope});
      expect(mapViewersCtrl).toBeDefined();
    }));

  });
});