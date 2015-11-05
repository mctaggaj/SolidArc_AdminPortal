/// <reference path="TitleForFilterGlobals.ts" />
module App.Tile.TitleForFilter {


    export interface ITitleResponse extends SolidArc.IResponse {
        title: string;
    }

    /**
     * Gets data from the api
     */
    export class TitleForFilterService {
        public static serviceId = "TitleForFilterService";
        public static moduleId = TitleForFilter.moduleId + "." + TitleForFilterService.serviceId;
        public static $inject: string[] = ["$http", "$q"];


        /**
         * The http service
         */
        private $http: ng.IHttpService;

        /**
         * The promise service
         */
        private $q: ng.IQService;

        /**
         * Creates a new DataService
         */
        constructor ($http: ng.IHttpService, $q: ng.IQService) {
            this.$http = $http;
            this.$q = $q;
        }

        /**
         * Gets all events for the current user
         * @returns {ng.IPromise<SolidArc.ITitleResponse>}
         */
        public getTitleForFilter = (filter: string):ng.IPromise<ITitleResponse> => {
            var defered = this.$q.defer();
            this.$http.get("/api/title-for-filter", {filter: filter})
                .then(
                (response: ng.IHttpPromiseCallbackArg<any>) => {
                    // Success
                    defered.resolve({
                        msg: null,
                        tile: response.data.title
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
    angular.module(TitleForFilterService.moduleId, ["ngMockE2E"])
        .service(TitleForFilterService.serviceId, TitleForFilterService)
        .run(function($httpBackend:angular.IHttpBackendService) {
        // do not bother server, respond with given content
        $httpBackend.whenGET('/api/title-for-filter').respond(function (method:string, url:string, data:any, headers:any, params:any) {
            if (data.filter === "") {
                return [200, {title: "Administrator Dashboard"}]
            }
            else {
                return [200, {title: "Unknown Title"}]
            }
        });
    });



}