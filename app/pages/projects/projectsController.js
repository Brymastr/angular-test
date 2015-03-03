/**
 * Created by Brycen on 2015-02-19.
 */

app.controller('ProjectsController', function($scope, $location, $routeParams) {
    $scope.projects = projects;
    $scope.category = $routeParams.category;
    $scope.single = $routeParams.single;

    $scope.isLast = function(check, color) {
        if(check) {
            $('body').css({backgroundColor: color});
        }
    };

    $scope.goTo = function(path) {
        $location.path('projects/' + $scope.category + '/' + path)
    };
});

var projects = [
    {
        id: 0,
        name: 'Tasty Ratios',
        description: 'An Android application I built with a team at BCIT that interfaces with the ReFleX Wireless Inc. bluetooth food scale for creating and following recipes.',
        technologies: ['Android', 'Bluetooth', 'Bootstrap 3', 'Materialize'],
        category: 'mobile',
        color: materialColors[0]
    }, {
        id: 1,
        name: 'ClickRacer',
        description: 'A website I built as a game that counts how many times you can click the mouse in 10 seconds.',
        technologies: ['PHP', 'Laravel 4', 'Bootstrap 3', 'MySql'],
        category: 'web',
        color: materialColors[1]
    }, {
        id: 2,
        name: 'Randomizr',
        description: 'A website I built that encapsulates user specified websites into a new link that forwards randomly to one of the specified websites.',
        technologies: ['PHP', 'Laravel 4', 'MySql'],
        category: 'web',
        color: materialColors[2]
    }, {
        id: 3,
        name: 'Convoy',
        description: 'A mobile platform for tracking the location of users in the context of group travel.',
        technologies: ['Android', 'Node.js', 'Express.js', 'MongoDB'],
        category: 'mobile',
        color: materialColors[3]
    }, {
        id: 4,
        name: 'StudentConnect',
        description: 'An iOS 8 / ASP.NET MVC 4 application I am building with a team at BCIT that enables instructors to more easily and directly communicate with students.',
        technologies: ['iOS 8', 'Swift', 'Node.js', 'Express.js', 'ASP.NET MVC 4', 'MySql/MongoDB/SQLite3'],
        category: 'both',
        color: materialColors[4]
    }, {
        id: 5,
        name: 'Eat, Play, Sleep',
        description: 'A website I am building with a team at BCIT that provides hotel, restaurant, and attraction information from Yelp.com and other rating sources.',
        technologies: ['Codeigniter 3', 'Bootstrap 3', 'MySql'],
        category: 'web',
        color: materialColors[5]
    }, {
        id: 6,
        name: 'OverAchiever',
        description: 'An Android application tracks your location and awards you points when you arrive at a predefined location.',
        technologies: ['Android', 'SQLite3'],
        category: 'mobile',
        color: materialColors[6]
    }
];