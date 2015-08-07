/**
 * Created by Brycen on 2015-02-19.
 */

angular.module('portfolioApp')
    .directive('menuDirective', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/shared/menu/menu.view.html'
        };
    });