/**
 * timeEntryDetail component (time-entry-detail)
 */
chronosApp.component('timeEntryDetail', {
    templateUrl: 'time-entry-detail/time-entry-detail.template.html',
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