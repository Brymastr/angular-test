/**
 * Created by Brycen on 2015-02-19.
 */

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../app/pages/home/homeView.html',
            controller: 'HomeController'
        });
});