/**
 * Created by Brycen on 2015-02-19.
 */

app.controller('ProjectsController', function($scope, $location, $routeParams) {
    $scope.projects = projects;
    $scope.category = $routeParams.category;
    $scope.single = $routeParams.single;
    $scope.project = $scope.projects[$scope.single];

    $scope.isLast = function(check, color) {
        if(check) {
            $('body').css({backgroundColor: color});
        }
    };

    $scope.setBgColor = function(color) {
        $('body').css({backgroundColor: color});
    };

    $scope.goTo = function(path) {
        $location.path('projects/' + $scope.category + '/' + path)
    };
});

var projects = [
    {
        id: 0,
        name: 'Tasty Ratios',
        shortDescription: 'An Android application I built with a team at BCIT that interfaces with the ReFleX Wireless Inc. bluetooth food scale for creating and following recipes',
        longDescription: 'Long Descritpion',
        technologies: ['Android', 'Bluetooth', 'Bootstrap 3', 'Materialize'],
        category: 'mobile',
        color: materialColors[0]
    }, {
        id: 1,
        name: 'ClickRacer',
        shortDescription: 'A website I built as a game that counts how many times you can click the mouse in 10 seconds',
        longDescription: 'Long Description',
        technologies: ['PHP', 'Laravel 4', 'Bootstrap 3', 'MySql'],
        category: 'web',
        url: 'http://click-racer.com',
        color: materialColors[1]
    }, {
        id: 2,
        name: 'Randomizr',
        shortDescription: 'A website I built that encapsulates user specified website URL\'s into a new link that forwards randomly to one of the specified websites',
        longDescription: 'Long Description',
        technologies: ['PHP', 'Laravel 4', 'MySql', 'Materialize'],
        category: 'web',
        url: 'http://randomizr.link',
        image: 'randomizr.png',
        color: materialColors[2]
    }, {
        id: 3,
        name: 'Convoy',
        shortDescription: 'A mobile platform for tracking the location of users in the context of group travel',
        longDescription: 'Long Description',
        technologies: ['Android', 'Node.js', 'Express.js', 'MongoDB'],
        category: 'mobile',
        color: materialColors[3]
    }, {
        id: 4,
        name: 'StudentConnect',
        shortDescription: 'An iOS 8 concept application that enables instructors to more easily and directly communicate with students',
        longDescription: 'Long Description',
        technologies: ['iOS 8', 'Swift', 'Node.js', 'Express.js', 'ASP.NET MVC 4', 'MySql/MongoDB/SQLite3'],
        category: 'mobile',
        color: materialColors[4]
    }, {
        id: 5,
        name: 'MarketSpace',
        shortDescription: 'Event ticket distribution system for the MarketSpace e-commerce platform by Daniel Flippance',
        longDescription: 'Long Description',
        technologies: ['MongoDB', 'ExpressJS', 'Node.js', 'AngularJS', 'Bootstrap 3'],
        category: 'web',
        color: materialColors[5]
    }, {
        id: 6,
        name: 'StudentConnect',
        shortDescription: 'ASP MVC 5 concept website that enables instructors to more easily and directly communicate with students',
        longDescription: 'Long Description',
        technologies: ['ASP.NET', 'AngularJS', 'Bootstrap 3'],
        category: 'web',
        color: materialColors[6]
    }, {

    }
];