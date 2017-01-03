(function () {
  'use strict';

  angular.module('app')

  // =========================================================================
  // MEDIA ELEMENT
  // =========================================================================

    .directive('mediaElement', function () {
      return {
        restrict: 'A',
        link: function (scope, element) {
          element.mediaelementplayer();
        }
      }

    })


    // =========================================================================
    // LIGHTBOX
    // =========================================================================

    .directive('lightbox', function () {
      return {
        restrict: 'C',
        link: function (scope, element) {
          element.lightGallery({
            enableTouch: true
          });
        }
      }

    })
})();