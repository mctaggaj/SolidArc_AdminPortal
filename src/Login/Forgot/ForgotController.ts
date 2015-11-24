/// <reference path="ForgotGlobals.ts" />

module App.Login.Forgot {

    interface IForgotErrorResponse {

    }

    interface IForgotController extends ng.IScope{

        submit: () => void;



    }

    export class ForgotController {
        public static controllerId = "ForgotController";
        public static moduleId = Forgot.moduleId + "." + ForgotController.controllerId;
        public static $inject = ["$scope", "$state"];

        private authService: Auth.AuthService;
        private $state: ng.ui.IStateService;

        private scope;

        constructor ($scope: IForgotController, $state: ng.ui.IStateService) {

            this.$state = $state;

            this.scope = $scope

            this.scope.submit = () => {
                $state.go(Login.state);
            }

        }

    }


    // Angular module and controller registration
    angular.module(ForgotController.moduleId, []).
        controller(ForgotController.controllerId, ForgotController)
        .config(["$stateProvider", ($routeProvider: ng.ui.IStateProvider) => {
            $routeProvider.state(Forgot.state, {
                templateUrl: Forgot.baseUrl+'forgot.html',
                controller: ForgotController.controllerId,
                url: "/forgot",
                noAuth: true,
                noEvent: true
            })
        }]);
}