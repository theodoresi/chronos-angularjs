/**
 * timeEntryDetail component (time-entry-detail)
 */
chronosApp.component('timeEntryDetail', {
    templateUrl: 'time-entry-detail/time-entry-detail.template.html',
    controller: ['$scope', '$routeParams', 'dataService', function($scope, $routeParams, dataService) {
        let self = this;
        self.isStartedAtOpen = false;
        self.isEndedAtOpen = false;
        // Only set to true in create mode after a time entry is created
        self.isCreated = false;

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
            self.isCreated = true;
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