/**
 * Created by Brycen on 2015-02-19.
 */

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/pages/home/home.view.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: 'app/pages/about/about.view.html',
            controller: 'AboutController'
        })
        .when('/projects/:category', {
            templateUrl: 'app/pages/projects/projects.view.html',
            controller: 'ProjectsController'
        })
        .when('/projects/:category/:single', {
            templateUrl: 'app/pages/projects/singleProject.view.html',
            controller: 'ProjectsController'
        })
        .when('/exp', {
            templateUrl: 'app/pages/resume/resume.view.html',
            controller: 'ResumeController'
      });

    $locationProvider.html5Mode(true);
});