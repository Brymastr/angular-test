app.controller('MenuController', function($scope, $location) {
    $scope.goTo = function(path) {
        $location.path(path);
    }
});