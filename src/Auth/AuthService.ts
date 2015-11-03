/// <reference path="AuthGlobals.ts" />

module App.Auth {

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
            this.$http.post("/api/authentication", {username: username, password: password})
                .then(
                (response: ng.IHttpPromiseCallbackArg<any>) => {
                    // Success
                    response.data.username = username 
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
                (response: ng.IHttpPromiseCallbackArg<any>) => {
                    response.data.username = username;
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
            this.$http.delete("/api/authentication").success(() => {
            })
        }

        /**
         * @returns {boolean} true if currently logged in false if logged out
         */
        public isLoggedIn = (): any => {
            var user = this.getAuthData();
            var authed = (user&&user.token!==null&&user.userId!==null&&user.username!==null);
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
        public getUserId = (): number => {
            return this.localStorageService.get(Auth.LS_UserId);
        }

        /**
         * Sets the token, and reties failed requests
         * @param token
         */
        private setToken = (token : any) => {
            this.user.token = token;
            this.localStorageService.set(Auth.LS_UserToken, token);
            if (token) {
                this.$http.defaults.headers.common["X-Token"] = token;
                this.httpAuthService.loginConfirmed();
            }
            else {
                // Clears the token
                this.$http.defaults.headers.common["X-Token"] = undefined;
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
        }


        private setUsername = (username: string) => {
            this.user.username = username;
            this.localStorageService.set(Auth.LS_Username, username);
        }

        private setUserId = (userId: number) => {
            this.user.userId = userId;
            this.localStorageService.set(Auth.LS_UserId, userId);
        }

        /**
         * Sets the authentication data
         * @param username The user name of the user
         * @param userId the user id of the user
         * @param userToken the session token
         */
        private setAuthData = (data: any) => {
            this.setUsername(data.username);
            this.setUserId(data.userId);
            this.setToken(data.token);
        }

        public getAuthData = (): SolidArc.IUser => {
            if (!this.user){
                this.user = (<any>{})
                this.user.token = this.getToken();
                this.user.username = this.getUsername();
                this.user.userId = this.getUserId();
            }
            return this.user;
        }

    }

    /**
     * Angular module and service registration
     */
    angular.module(AuthService.moduleId, ["LocalStorageModule", "http-auth-interceptor", "ngMockE2E"])
        .service(AuthService.serviceId, AuthService)
        .run(function($httpBackend:angular.IHttpBackendService) {
            // do not bother server, respond with given content
            $httpBackend.whenPOST('/api/authentication').respond(function (method:string, url:string, data:any, headers:any, params:any) {
                data = JSON.parse(JSON.stringify(eval("(" +data+ ")")));
                if (data["username"] === "superadmin1@mx.com" && data["password"] === "pass1234") {
                    return [200, {"token": "abc123", "userId": "f2", "username": data.username}];
                }
                else {
                    return [403, {msg: "Invalid Username/Password"}, {header: 'one'}];
                }
            });
            $httpBackend.whenDELETE('/api/authentication').respond(function (method:string, url:string, data:any, headers:any, params:any) {
                return [200, {msg: "Logged out"}];
            });
        });
}