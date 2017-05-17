(function() {

  'use strict'

  function affixDirective($window) {
    return {
      restrict: 'A',
      link: function(scope, elem, attrs) {
        const affixed = angular.element(elem)
        const elOffsetTop = elem[0].offsetTop

        function isScrolledPast() {
          return $window.pageYOffset > elOffsetTop
        }

        function affixElement() {
          scope.$apply(function() {
            if (isScrolledPast()) {
              return affixed.addClass('navbar-fixed-top')
            }
            return affixed.removeClass('navbar-fixed-top')
          })
        }

        angular.element($window).bind('scroll', affixElement)
      }
    }
  }

  angular
    .module('nwn.ui-bootstrap-affix', [])
    .directive('affix', ['$window', affixDirective])

})()
