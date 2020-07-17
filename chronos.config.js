/**
 * Configure routing
 */
chronosApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/time-entry-list', {
        template: '<time-entry-list></time-entry-list>'
    }).when('/time-entry-detail/:id', {
        // Edit an existing time entry
        template: '<time-entry-detail mode="edit"></time-entry-detail>'
    }).when('/new-time-entry', {
        // Create a new time entry
        template: '<time-entry-detail mode="create"></time-entry-detail>'
    }).when('/', {
        redirectTo: '/time-entry-list'
    }).when('/not-found', {
        templateUrl: 'templates/not-found.html'
    }).otherwise('/not-found');
}]);

