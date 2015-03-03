/**
 * Created by Brycen on 2015-02-19.
 */

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../app/pages/home/homeView.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: '../app/pages/about/aboutView.html',
            controller: 'AboutController'
        })
        .when('/projects/:category', {
            templateUrl: '../app/pages/projects/projectsView.html',
            controller: 'ProjectsController'
        })
        .when('/projects/:category/:single', {
            templateUrl: '../app/pages/projects/singleProjectView.html',
            controller: 'ProjectsController'
        }
    );

    $locationProvider.html5Mode(true);
});