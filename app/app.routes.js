/**
 * Created by Brycen on 2015-02-19.
 */

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../app/pages/home/homeView.html',
            controller: 'HomeController'
        })
        .when('/about',  {
            templateUrl: '../app/pages/about/aboutView.html'
        });

    $locationProvider.html5Mode(true);
});