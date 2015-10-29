/// <reference path="DataGlobals.ts" />
module App.Data {

    /**
     * Handles user authentication and current user state
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

        public clientLogin = (username: string, password: string):ng.IPromise<SolidArc.IResponse> => {
            return this.authService.login(username, password)
        }

        public clientRegister = (username: string, password: string, firstName: string, lastName: string):ng.IPromise<SolidArc.IResponse> => {
            return this.authService.register(username, password, firstName, lastName)
        }

        public clientLogout = (): void => {
            this.authService.logout();
        }

        public getAuthData = ():SolidArc.IUser => {
            return this.authService.getAuthData();
        }
    }

    /**
     * Angular module and service registration
     */
    angular.module(DataService.moduleId, [])
        .service(DataService.serviceId, DataService)



}