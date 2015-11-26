/// <reference path="FarmToForkGlobals.ts" />
module App.FarmToFork {

    export interface INeeds {
        need_id: string;
        quantity: number;
        units: string;
        date: Date;
        pantry_id: number;
        user_id: number;
        item_title: string;
        description: string;
        category: string;
        is_perishable: number;
        is_refrigerated: number;
        need_type: number;
    }

    /**
     * Gets data from the api
     */
    export class FarmToForkService {
        public static serviceId = "FarmToForkService";
        public static moduleId = App.moduleId + "." + FarmToForkService.serviceId;
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
         * Creates a new FarmToForkService
         */
        constructor ($http: ng.IHttpService, $q: ng.IQService) {
            this.$http = $http;
            this.$q = $q;
        }


        public getNeeds = ():ng.IPromise<any> => {
            var defered = this.$q.defer();
            this.$http.get("http://131.104.49.228/api/1.0/needs", {})
                .then(
                    (response: ng.IHttpPromiseCallbackArg<any>)=>{
                        defered.resolve(response.data)
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
    angular.module(FarmToForkService.moduleId, ["ngMockE2E"])
        .service(FarmToForkService.serviceId, FarmToForkService);

}
