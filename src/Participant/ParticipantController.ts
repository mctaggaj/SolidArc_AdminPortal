/// <reference path="ParticipantGlobals.ts" />
module App.Participant {

    interface IParticipant extends IItem{
        name: string;
    }
    interface IParticipantControllerScope extends App.IListDetailScope{
    }

    interface IParticipantStateParams extends App.IListDetailStateParams {
    }

    export class ParticipantController extends App.ListDetailController<IParticipant>{

        public static controllerId = "ParticipantController";
        public static moduleId = Home.moduleId + "." + ParticipantController.controllerId;


        public static $inject = ["$scope","$stateParams","$rootScope", "$state", Data.DataService.serviceId];
        constructor (protected $scope: IParticipantControllerScope , protected $stateParams: IParticipantStateParams, $rootScope:ng.IRootScopeService, protected $state: ng.ui.IStateService) {
            super($scope, $stateParams, $rootScope, $state, state);
            this.$scope.list = [
                {id: "1", name: "Participant 1"},
                {id: "2", name: "Participant 2"}
            ]
            this.didUpdateParams();
        }
    }

    // Angular module and controller registration
    angular.module(ParticipantController.moduleId, [Data.moduleId]).
        controller(ParticipantController.controllerId, ParticipantController)
        .config(["$stateProvider", ($stateProvider: ng.ui.IStateProvider) => {
            $stateProvider.state(Participant.state, {
                templateUrl: Participant.baseUrl+'participant.html',
                controller: ParticipantController.controllerId,
                url: "/participant?selectedId"
            })
        }])
}
