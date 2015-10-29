/// <reference path="LoginGlobals.ts" />
module App.Login {

    interface ILoginErrorResponse {

    }

    interface ILoginController extends ng.IScope{
        message: string;
        login: (data: any) => void;
        register: (data: any) => void;
        loginMode: boolean;
        info: {
            email: string
            password: string
        };

        error: {
            enabled: boolean
            title: string
            state: string
            handler: (self: any) => void
            html: string
        }
    }

    export class LoginController {
        public static controllerId = "LoginController";
        public static moduleId = Login.moduleId + "." + LoginController.controllerId;
        public static $inject = ["$scope", "$state", Data.DataService.serviceId];

        private dataService: Data.DataService;
        private $state: ng.ui.IStateService;
        private info = {
            email: "",
            password: ""
        }
        private error = {
            enabled: false,
            title: "Error!",
            state: "",
            handler: (self) => {
                console.log(self)

                if (self.state == "BAD_LOGIN"){


                    this.scope.loginMode = false
                    self.enabled = false
                }
            },
            html: ""
        }
        private loginMode = true;
        private scope;

        constructor ($scope: ILoginController, $state: ng.ui.IStateService, dataService: Data.DataService) {
            this.dataService = dataService;
            this.$state = $state;
            $scope.loginMode = true;

            if ($state.current.url == '/register')
                $scope.loginMode = false;

            this.scope = $scope

            $scope.login = this.login

            $scope.info = this.info

            $scope.error = this.error

        }

        private login = () => {
            if (!this.scope.loginMode) {
                this.scope.loginMode = true
                this.error.enabled = false
                return
            }

            this.dataService.clientLogin(this.scope.info.email,this.scope.info.password)
                .then((response : SolidArc.IResponse) => {
                    // Sucess
                    this.$state.go(Home.state);
                }, (response : SolidArc.IResponse) => {
                    this.error.title = 'Error!'

                    this.error.html = 'Invalid username or password. If you do not have an account, \
                        make sure you <a class="alert-link" ng-click="msg.handler(msg);">register</a>'
                    this.error.state = "BAD_LOGIN";
                    this.error.enabled = true
                });
        };
    }


    // Angular module and controller registration
    angular.module(LoginController.moduleId, [Data.DataService.moduleId]).
        controller(LoginController.controllerId, LoginController)
        .config(["$stateProvider", ($routeProvider: ng.ui.IStateProvider) => {
            $routeProvider.state(Login.state, {
                templateUrl: Login.baseUrl+'login.html',
                controller: LoginController.controllerId,
                url: "/login"
            })
        }])
        .config(["$urlRouterProvider", ($urlRouterProvider: ng.ui.IUrlRouterProvider) => {
            $urlRouterProvider.otherwise("/login")
        }]);;
}