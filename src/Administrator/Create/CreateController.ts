/// <reference path="CreateGlobals.ts" />
module App.Administrator.Create {

    interface ICreateControllerScope extends ng.IScope{
        participant: any;
        create: () => void;
    }

    export class CreateController {
        public static controllerId = "CreateAdministratorController";
        public static moduleId = Create.moduleId + "." + CreateController.controllerId;

        public static $inject = ["$scope", Data.DataService.serviceId];
        constructor (private $scope: ICreateControllerScope, dataService: Data.DataService) {
            this.$scope = $scope;

        }
    }

    // Angular module and controller registration
    angular.module(CreateController.moduleId, [Data.moduleId]).
        controller(CreateController.controllerId, CreateController)
        .config(["$stateProvider", ($stateProvider: ng.ui.IStateProvider) => {
            $stateProvider.state(Create.state, {
                templateUrl: Create.baseUrl+'create.html',
                controller: CreateController.controllerId,
                url: "/administrator/create"
            })
        }])
}