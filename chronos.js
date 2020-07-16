let chronosApp = angular.module('chronosApp', ['ngRoute']);

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

/**
 * Create service
 */
chronosApp.service('chronosService', ['$http', function($http) {

}]);

/**
 * timeEntryList component (time-entry-list)
 */
chronosApp.component('timeEntryList', {
    templateUrl: 'templates/time-entry-list.template.html',
    controller: ['$scope', 'chronosService', function($scope, chronosService) {
        let self = this;
    }]
});

/**
 * timeEntryDetail component (time-entry-detail)
 */
chronosApp.component('timeEntryDetail', {
    templateUrl: 'templates/time-entry-detail.template.html',
    controller: ['$scope', '$routeParams', 'chronosService', function($scope, $routeParams, chronosService) {
        let self = this;
        self.id = $routeParams.id;
    }],
    bindings: {
        mode: '@'
    }
});