/// <reference path="ShellGlobals.ts" />
module App.Shell {

    interface IShellControllerShell extends ng.IScope{
        dataService: Data.DataService;
        authService: Auth.AuthService;
    }

    export class ShellController {
        public static controllerName = "ShellController";
        public static moduleId = Shell.moduleId + "." + ShellController.controllerName;
        public static $inject = ["$scope", Data.DataService.serviceId, Auth.AuthService.serviceId];

        constructor ($scope: IShellControllerShell, dataService: Data.DataService, authService: Auth.AuthService) {
            $scope.dataService=dataService;
            $scope.authService=authService;
        }
    }
    // Angular module and controller registration
    angular.module(ShellController.moduleId, [Auth.AuthService.moduleId, Data.DataService.moduleId]).
        controller(ShellController.controllerName, ShellController);
}