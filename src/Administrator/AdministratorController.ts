/// <reference path="AdministratorGlobals.ts" />
module App.Administrator {

    interface IAdministrator extends IItem{
        name: string;
        captain: any;
        participants: any[];
    }

    interface IAdministratorControllerScope extends App.IListDetailScope{
    }

    interface IAdministratorStateParams extends App.IListDetailStateParams {
    }

    export class AdministratorController extends App.ListDetailController<IAdministrator>{

        public static controllerId = "AdministratorController";
        public static moduleId = Administrator.moduleId + "." + AdministratorController.controllerId;

        public static $inject = ["$scope","$stateParams","$rootScope", "$state", Data.DataService.serviceId];
        constructor (protected $scope: IAdministratorControllerScope , protected $stateParams: IAdministratorStateParams, $rootScope:ng.IRootScopeService, protected $state: ng.ui.IStateService) {
            super($scope, $stateParams, $rootScope, $state, state);
            this.$scope = $scope;
            this.$scope.list = [
                {
                    id: "1",
                    username: "Administrator 1",
                    mail: "Admin1@mx.com",
                    password: "[RESET BUTTON HERE]"
                },
                {
                    id: "2",
                    username: "Administrator 2",
                    mail: "Admin2@mx.com",
                    password: "[RESET BUTTON HERE]"
                }
            ]
            this.didUpdateParams();
        }
    }

    // Angular module and controller registration
    angular.module(AdministratorController.moduleId, [Data.moduleId]).
        controller(AdministratorController.controllerId, AdministratorController)
        .config(["$stateProvider", ($stateProvider: ng.ui.IStateProvider) => {
            $stateProvider.state(Administrator.state, {
                templateUrl: Administrator.baseUrl+'administrator.html',
                controller: AdministratorController.controllerId,
                url: "/administrators?selectedId"
            })
        }])
}