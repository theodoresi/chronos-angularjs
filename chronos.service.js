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
