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
        description: 'All about me',
        color: materialColors[0]
    }, {
        title: 'Experience',
        description: 'Jobs and technologies',
        color: materialColors[1]
    }, {
        title: 'Web Projects',
        description: 'Sites and apps built for the web',
        color: materialColors[2]
    }, {
        title: 'Mobile Projects',
        description: 'Android and iOS application projects',
        color: materialColors[3]
    }, {
        title: 'Other Projects',
        description: 'Because trying new things is fun',
        color: materialColors[4]
    }
];