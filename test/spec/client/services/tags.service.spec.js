(function() {

  'use strict';

  describe('CubAlgs.services.tags', function() {

    var Tags;

    beforeEach(module('CubAlgs'));
    beforeEach(inject(function($injector) {
      Tags = $injector.get('TagsService');
    }));

    describe('constructor', function() {

      it('should be gj', function() {
        expect(1).toEqual(1);
      });

    });

  });

})();
