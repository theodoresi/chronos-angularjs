/**
 * timeEntryList component (time-entry-list)
 */
chronosApp.component('timeEntryList', {
    templateUrl: 'time-entry-list/time-entry-list.template.html',
    controller: ['$scope', '$log', 'dataService', 'chronosService',
        function($scope, $log, dataService, chronosService) {
            let self = this;
            self.timeEntries = null;
            self.errorMessage = '';

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

            /**
             * Get all time entries
             */
            self.getTimeEntryList = function() {
                dataService.getTimeEntryList().then(function(resp) {
                    self.timeEntries = resp.data;
                    for (let entry of self.timeEntries) {
                        self.processTimeEntry(entry);
                    }
                }, function(err) {
                    let errorMessage = 'Failed to get time entry list. Reason: ';
                    if (err.status === -1) {
                        const reason = 'unable to connect to server'
                        self.errorMessage = errorMessage + reason;
                        $log.log(self.errorMessage);
                    } else {
                        const reason = err.data.reason;
                        self.errorMessage = errorMessage + reason;
                        $log.log(self.errorMessage);
                    }
                });
            }

            self.getTimeEntryList();
            
    }]
});