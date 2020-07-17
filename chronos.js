let chronosApp = angular.module('chronosApp', ['ngRoute', 'ui.bootstrap']);

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
 * Data service
 */
chronosApp.service('dataService', ['$http', function($http) {
    this.timeEntryUrl = 'http://localhost:5000/api/time_entry';
    this.getTimeEntryList = function() {
        return $http.get(this.timeEntryUrl);
    }
}]);

/**
 * Chronos Service
 */
chronosApp.service('chronosService', ['$http', function($http) {
    this.catchError = function() {
        console.log('Something goes wrong');
    }
}]);

/**
 * timeEntryList component (time-entry-list)
 */
chronosApp.component('timeEntryList', {
    templateUrl: 'templates/time-entry-list.template.html',
    controller: ['$scope', 'dataService', 'chronosService',
        function($scope, dataService, chronosService) {
            let self = this;
            self.timeEntries = null;

            self.processTimeEntry = function(entry) {
                // Get the date & time part of started_at and ended_at
                entry.started_at_date = new Date(2020, 3, 4);
                    entry.ended_at_date = new Date(2020, 3, 4);

                    entry.started_at_time = new Date();
                    entry.started_at_time.setHours(12);
                    entry.started_at_time.setMinutes(12);

                    entry.ended_at_time = new Date();
                    entry.ended_at_time.setHours(12);
                    entry.ended_at_time.setMinutes(12);
            }

            dataService.getTimeEntryList().then(function(resp) {
                self.timeEntries = resp.data;
                for (let entry of self.timeEntries) {
                    self.processTimeEntry(entry);
                }
            }).catch(chronosService.catchError);
    }]
});

/**
 * timeEntryDetail component (time-entry-detail)
 */
chronosApp.component('timeEntryDetail', {
    templateUrl: 'templates/time-entry-detail.template.html',
    controller: ['$scope', '$routeParams', 'dataService', function($scope, $routeParams, dataService) {
        let self = this;
        self.isStartedAtOpen = false;
        self.isEndedAtOpen = false;

        self.switchMode = function(newMode) {
            self.mode = newMode;
        }

        self.editTimeEntry = function() {
            self.switchMode('edit');
        }

        self.saveTimeEntry = function() {
            self.switchMode('view');
            
        }

        self.createTimeEntry = function() {
            self.switchMode('view');
        }

        self.cancel = function() {
            self.switchMode('view');
        }

        self.openEndedAt = function() {
            self.isEndedAtOpen = true;
        }
        self.openStartedAt = function() {
            self.isStartedAtOpen = true;
        }
    }],
    bindings: {
        mode: '@',
        timeEntry: '<'
    }
});