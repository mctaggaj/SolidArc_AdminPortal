/// <reference path="EditGlobals.ts" />
module App.Team.Edit {

    interface IEditControllerScope extends ng.IScope{
        participant: any;
        create: () => void;
    }

    export class EditController {
        public static controllerId = "EditTeamController";
        public static moduleId = Edit.moduleId + "." + EditController.controllerId;

        public static $inject = ["$scope", Data.DataService.serviceId];
        constructor (private $scope: IEditControllerScope, dataService: Data.DataService) {
            this.$scope = $scope;
        }
    }

    // Angular module and controller registration
    angular.module(EditController.moduleId, [Data.moduleId]).
        controller(EditController.controllerId, EditController)
        .config(["$stateProvider", ($stateProvider: ng.ui.IStateProvider) => {
            $stateProvider.state(Edit.state, {
                templateUrl: Edit.baseUrl+'edit.html',
                controller: EditController.controllerId,
                url: "/teams/edit?teamId"
            })
        }])
}