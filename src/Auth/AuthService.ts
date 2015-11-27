/// <reference path="AuthGlobals.ts" />

module App.Auth {

    import IUser = SolidArc.IUser;
    /**
     * Handles user authentication and current user state
     */
    export class AuthService {
        public static serviceId = "AuthenticationService";
        public static moduleId = App.moduleId + "." + AuthService.serviceId;
        public static $inject: string[] = ["$http", "$q", "localStorageService", "authService"];

        /**
         * The http service
         */
        private $http: ng.IHttpService;

        /**
         * The promise service
         */
        private $q: ng.IQService;

        /**
         * The local storage service
         */
        private localStorageService: ng.localStorage.ILocalStorageService;

        /**
         * The service that handles 401 and 403 errors
         */
        private httpAuthService : ng.httpAuth.IAuthService;

        /**
         * Storage of the user data
         */
        private user: SolidArc.IUser;

        /**
         * Creates a new AuthService
         */
        constructor ($http: ng.IHttpService, $q: ng.IQService, localStorageService: ng.localStorage.ILocalStorageService, httpAuthService: ng.httpAuth.IAuthService) {
            this.$http = $http;
            this.$q = $q;
            this.localStorageService = localStorageService;
            this.httpAuthService = httpAuthService;

            if (this.isLoggedIn()) {
                this.setToken(this.getToken());
            }
        }

        /**
         * Logs in with the given username and password
         * @param username
         * @param password
         */
        public login = (username: string, password: string): ng.IPromise<SolidArc.IResponse> => {
            this.clearAuthData();
            var defered = this.$q.defer();
            this.$http.post("/api/index.php/login", {creds:{username: username, password: password}})
                .then(
                    (response: ng.IHttpPromiseCallbackArg<IUser>) => {
                        response.data.USERID="-1";
                        response.data.USERNAME=username;
                        response.data.EVENTID="1";
                        this.setAuthData(response.data)
                        defered.resolve({
                            msg: null
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

        /**
         * Registers a new user
         * @param username
         * @param password
         */
        public register = (username: string, password: string, firstName: string, lastName: string): ng.IPromise<SolidArc.IResponse> => {
            this.clearAuthData();
            var defered = this.$q.defer();
            this.$http.post("/api/users", {username: username, password: password, firstName: firstName, lastName: lastName})
                .then(
                    (response: ng.IHttpPromiseCallbackArg<IUser>) => {
                        this.setAuthData(response.data)
                        defered.resolve({
                            msg: null
                        });
                    },
                    (response: ng.IHttpPromiseCallbackArg<any>) => {
                        defered.reject({
                            msg: response.data.msg
                        });;
                    });
            return defered.promise;
        }

        /**
         * Logs the current user out
         */
        public logout = (): void => {
            this.clearAuthData();
            this.$http.delete("/api/index.php/login").success(() => {
            })
        }

        /**
         * @returns {boolean} true if currently logged in false if logged out
         */
        public isLoggedIn = (): any => {
            var user = this.getAuthData();
            var authed = (user&&user.TOKEN!==null&&user.USERID!==null&&user.USERNAME!==null);
            return authed;
        }

        /**
         * @returns {string} the user name of the current user
         */
        public getUsername = (): string => {
            return this.localStorageService.get(Auth.LS_Username);
        }

        /**
         * @returns {string} the user id of the current user
         */
        public getUserId = (): string => {
            return this.localStorageService.get(Auth.LS_UserId);
        }

        /**
         * @returns {string} the user event of the current user
         */
        public getEvent = (): any => {
            return this.localStorageService.get(Auth.LS_Event);
        }

        /**
         * Sets the token, and reties failed requests
         * @param token
         */
        private setToken = (token : any) => {
            this.user.TOKEN = token;
            this.localStorageService.set(Auth.LS_UserToken, token);
            if (token) {
                this.$http.defaults.headers.common["TOKEN"] = token;
                this.httpAuthService.loginConfirmed();
            }
            else {
                // Clears the token
                this.$http.defaults.headers.common["TOKEN"] = undefined;
                this.httpAuthService.loginCancelled();
            }
        }

        /**
         * @returns {string} the auth token
         */
        public getToken = (): string => {
            return this.localStorageService.get(Auth.LS_UserToken);
        }

        public clearToken = () => {
            return this.setToken(undefined)
        }

        /**
         * Clears the authentication data
         */
        private clearAuthData = () => {
            this.clearToken()
            this.user = null;
            this.localStorageService.remove(Auth.LS_Username);
            this.localStorageService.remove(Auth.LS_UserId);
            this.localStorageService.remove(Auth.LS_UserToken);
            this.localStorageService.remove(Auth.LS_Event);
        }


        private setUsername = (username: string) => {
            this.user.USERNAME = username;
            this.localStorageService.set(Auth.LS_Username, username);
        }

        public setEvent = (event: string) => {
            this.user.USERID = event;
            this.localStorageService.set(Auth.LS_Event, event);
        }

        private setUserId = (userId: string) => {
            this.user.USERID = userId;
            this.localStorageService.set(Auth.LS_UserId, userId);
        }

        /**
         * Sets the authentication data
         * @param username The user name of the user
         * @param userId the user id of the user
         * @param userToken the session token
         */
        private setAuthData = (data: IUser) => {
            this.setUsername(data.USERNAME);
            this.setEvent(data.EVENTID);
            this.setUserId(data.USERID);
            this.setToken(data.TOKEN);
        }

        public getAuthData = (): SolidArc.IUser => {
            if (!this.user){
                this.user = (<any>{})
                this.user.TOKEN = this.getToken();
                this.user.USERNAME = this.getUsername();
                this.user.USERID = this.getUserId();
                this.user.EVENTID = this.getEvent();
            }
            return this.user;
        }

        public hasSelectedEvent = () => {
            if(this.getAuthData().EVENTID) {
                return true;
            }
            return false;
        }
    }

    /**
     * Angular module and service registration
     */
    angular.module(AuthService.moduleId, ["LocalStorageModule", "http-auth-interceptor", "ngMockE2E"])
        .service(AuthService.serviceId, AuthService)
        .run(["$httpBackend", "$location", "localStorageService", function($httpBackend:angular.IHttpBackendService, $location: ng.ILocationService, localStorageService: ng.localStorage.ILocalStorageService) {

            if ($location.search()["mock"]) {
                localStorageService.set(Data.LS_UseMocks, $location.search()["mock"]);
            }
            var master = true;
            if (localStorageService.get(Data.LS_UseMocks) === "false" || localStorageService.get(Data.LS_UseMocks) === false) {
                master = false;
            }
            if ($location.search()["mockLogin"]) {
                localStorageService.set(Auth.LS_UseMocks_Auth, $location.search()["mockLogin"]);
            }
            if (master && !(localStorageService.get(Auth.LS_UseMocks_Auth)==="false")) {
                $httpBackend.whenPOST('/api/index.php/login').respond(function (method:string, url:string, data:any, headers:any, params:any) {
                    data = JSON.parse(JSON.stringify(eval("(" + data + ")")));
                    if (data.creds["USERNAME"] === "superadmin1@mx.com" && data.creds["PASSWORD"] === "pass1234") {
                        return [200, {TOKEN: "abc123", USERID: "f2", USERNAME: data.username}];
                    }
                    else {
                        return [403, {msg: "Invalid Username/Password"}, {header: 'one'}];
                    }
                });
            }
            else {
                $httpBackend.whenGET('/api/index.php/login').passThrough();
            }
            $httpBackend.whenDELETE('/api/authentication').respond(function (method:string, url:string, data:any, headers:any, params:any) {
                return [200, {msg: "Logged out"}];
            });
        }]);
}