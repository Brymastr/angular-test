/**
 * Created by Brycen on 2015-02-19.
 */

angular.module('portfolioApp')
    .controller('HomeController', function() {
        this.items = homeItems;
    });

var homeItems = [
    {
        title: 'About',
        description: 'All about me'
    }, {
        title: 'Experience',
        description: 'Jobs and technologies'
    }, {
        title: 'Web Projects',
        description: 'Sites and apps built for the web'
    }, {
        title: 'Mobile Projects',
        description: 'Android and iOS application projects'
    }, {
        title: 'Other Projects',
        description: 'Because trying new things is fun'
    }
];