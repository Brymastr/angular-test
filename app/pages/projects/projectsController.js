/**
 * Created by Brycen on 2015-02-19.
 */

app.controller('ProjectsController', function($scope, $routeParams) {
    $scope.projects = projects;
    $scope.category = $routeParams.category;
});

var projects = [
    {
        name: 'Tasty Ratios',
        description: 'An Android application I built with a team at BCIT that interfaces with the ReFleX Wireless Inc. bluetooth food scale for creating and following recipes.',
        technologies: ['Android', 'Bluetooth', 'Bootstrap 3', 'Materialize'],
        category: 'mobile'
    }, {
        name: 'ClickRacer',
        description: 'A website I built as a game that counts how many times you can click the mouse in 10 seconds.',
        technologies: ['PHP', 'Laravel 4', 'Bootstrap 3'],
        category: 'web'
    }, {
        name: 'Randomizr',
        description: 'A website I built that encapsulates user specified websites into a new link that forwards randomly to one of the specified websites.',
        technologies: ['PHP', 'Laravel 4'],
        category: 'web'
    }, {
        name: 'Convoy',
        description: 'A mobile platform for tracking the location of users in the context of group travel.',
        technologies: ['Android', 'Node.js', 'Express.js'],
        category: 'mobile'
    }, {
        name: 'StudentConnect',
        description: 'An iOS 8 / ASP.NET MVC 4 application I am building with a team at BCIT that enables instructors to more easily and directly communicate with students.',
        technologies: ['iOS 8', 'Swift', 'Node.js', 'Express.js', 'ASP.NET MVC 4'],
        category: 'both'
    }, {
        name: 'Eat, Play, Sleep',
        description: 'A website I am building with a team at BCIT that provides hotel, restaurant, and attraction information from Yelp.com and other rating sources for several locations.',
        technologies: ['Codeigniter 3', 'Bootstrap 3'],
        category: 'web'
    }
];