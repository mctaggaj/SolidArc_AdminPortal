/// <reference path="DataGlobals.ts" />
module App.Data {


    export interface IEventsResponse extends SolidArc.IResponse {
        data?: {events: any[]}
    }

    /**
     * Gets data from the api
     */
    export class DataService {
        public static serviceId = "DataService";
        public static moduleId = App.moduleId + "." + DataService.serviceId;
        public static $inject: string[] = ["$http", "$q", Auth.AuthService.serviceId];


        /**
         * The http service
         */
        private $http: ng.IHttpService;

        /**
         * The promise service
         */
        private $q: ng.IQService;

        /**
         * AuthService reference
         */
        private authService: Auth.AuthService

        /**
         * Creates a new DataService
         */
        constructor ($http: ng.IHttpService, $q: ng.IQService, authService: Auth.AuthService) {
            this.$http = $http;
            this.$q = $q;
            this.authService = authService
        }

        /**
         * Gets all events for the current user
         * @returns {ng.IPromise<SolidArc.IEventsResponse>}
         */
        public getEvents = ():ng.IPromise<IEventsResponse> => {
            var defered = this.$q.defer();
            this.$http.get("/api/events", {})
                .then(
                (response: ng.IHttpPromiseCallbackArg<any>) => {
                    // Success
                    defered.resolve({
                        msg: null,
                        data: response.data
                    });
                },
                (response: ng.IHttpPromiseCallbackArg<any>) => {
                    // Failure
                    defered.reject({
                        msg: response.data.msg
                    });
                });
            return defered.promise;
        }
    }

    /**
     * Angular module and service registration
     */
    angular.module(DataService.moduleId, ["ngMockE2E"])
        .service(DataService.serviceId, DataService)
        .run(function($httpBackend:angular.IHttpBackendService) {
        // do not bother server, respond with given content
        $httpBackend.whenGET('/api/events').respond(function (method:string, url:string, data:any, headers:any, params:any) {
            return [200, {events: [{name: "Guelph 2016"}, {name: "Laurier 2016"}]}];
        });
    });



}