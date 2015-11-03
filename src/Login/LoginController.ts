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
        public static $inject = ["$scope", "$state", Auth.AuthService.serviceId];

        private authService: Auth.AuthService;
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

        constructor ($scope: ILoginController, $state: ng.ui.IStateService, authService: Auth.AuthService) {
            this.authService = authService;
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

            this.authService.login(this.scope.info.email,this.scope.info.password)
                .then((response : SolidArc.IResponse) => {
                    // Success
                    this.$state.go(SelectEvent.state);
                }, (response : SolidArc.IResponse) => {
                    this.error.title = 'Error!'

                    this.error.html = 'Invalid username and or password.'
                    this.error.state = "BAD_LOGIN";
                    this.error.enabled = true
                });
        };
    }


    // Angular module and controller registration
    angular.module(LoginController.moduleId, [Auth.AuthService.moduleId]).
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