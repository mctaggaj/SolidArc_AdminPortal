/// <reference path="TitleForFilterGlobals.ts" />
module App.Tile.TitleForFilter {


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
        public getTitleForFilter = (filter: string):ng.IPromise<string> => {
            var defered = this.$q.defer();
            if (filter === undefined) {
                filter = " ";
            }
            this.$http.post("/api/title-for-filter", {filter: filter})
                .then(
                (response: ng.IHttpPromiseCallbackArg<any>) => {
                    // Success
                    defered.resolve(response.data.title);
                },
                (response: ng.IHttpPromiseCallbackArg<any>) => {
                    // Failure
                    defered.resolve("Dashboard")
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
        $httpBackend.whenPOST('/api/title-for-filter').respond(function (method:string, url:string, data:any, headers:any, params:any) {
            data = JSON.parse(JSON.stringify(eval("(" +data+ ")")));
            var title = "Unknown Title";
            var titles:any = {
                "": "Administrator Dashboard",
                "participants": "Participants Dashboard",
                "info": "Information Dashboard",
                "chat": "Chat Dashboard",
                "buses":"Buses Dashboard",
                "routes": "Routes Dashboard",
                "teams": "Teams Dashboard",
                "administrators": "Administrators Dashboard",
                "events":"Events Dashboard",
                "waivers":"Waivers Dashboard",
                "statistics":"Statistics Dashboard",
                "all": "All Options Dashboard"

            }
            if (titles.hasOwnProperty(data.filter)) {
                title = titles[data.filter]
            }
            return [200, {title: title}];
        });
    });



}