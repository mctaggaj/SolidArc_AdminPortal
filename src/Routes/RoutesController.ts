/// <reference path="RoutesGlobals.ts" />
module App.Routes {

    interface IRoutesControllerScope extends ng.IScope{
    }

    interface IRoutesStateParams {
    }

    export class RoutesController {
        public static controllerId = "RoutesController";
        public static moduleId = Routes.moduleId + "." + RoutesController.controllerId;

        public static $inject = ["$scope","$stateParams"];
        constructor (private $scope: IRoutesControllerScope, $stateParams: IRoutesStateParams) {
            this.$scope = $scope;
        }
    }

    // Angular module and controller registration
    angular.module(RoutesController.moduleId, []).
        controller(RoutesController.controllerId, RoutesController)
        .config(["$stateProvider", ($stateProvider: ng.ui.IStateProvider) => {
            $stateProvider.state(Routes.state, {
                templateUrl: Routes.baseUrl+'routes.html',
                controller: RoutesController.controllerId,
                url: "/routes"
            })
        }])
}

