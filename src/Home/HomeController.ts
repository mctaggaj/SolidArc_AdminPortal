/// <reference path="HomeGlobals.ts" />
module App.Home {

    interface IHomeControllerShell extends ng.IScope{

    }

    export class HomeController {
        public static controllerId = "HomeController";
        public static moduleId = Home.moduleId + "." + HomeController.controllerId;

        public static $inject = ["$scope",Data.DataService.serviceId];
        constructor (private $scope: IHomeControllerShell) {

        }
    }
    // Angular module and controller registration
    angular.module(HomeController.moduleId, []).
        controller(HomeController.controllerId, HomeController)
        .config(["$stateProvider", ($routeProvider: ng.ui.IStateProvider) => {
            $routeProvider.state(Home.state, {
                templateUrl: Home.baseUrl+'home.html',
                controller: HomeController.controllerId,
                url: "/home"
            })
        }])
}