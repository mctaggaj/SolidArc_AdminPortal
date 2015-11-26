/// <reference path="ParticipantGlobals.ts" />
module App.Participant {


    export import IParticipant = SolidArc.IParticipant;
    interface IParticipantControllerScope extends App.IListDetailScope{
        list: IParticipant[];
    }

    interface IParticipantStateParams extends App.IListDetailStateParams {
    }

    export class ParticipantController extends App.ListDetailController<Participant.IParticipant>{

        public static controllerId = "ParticipantController";
        public static moduleId = Home.moduleId + "." + ParticipantController.controllerId;

        public static $inject = ["$scope","$stateParams","$rootScope", "$state", Data.DataService.serviceId];
        constructor (protected $scope: IParticipantControllerScope , protected $stateParams: IParticipantStateParams, $rootScope:ng.IRootScopeService, protected $state: ng.ui.IStateService, private dataService: Data.DataService) {
            super($scope, $stateParams, $rootScope, $state, state);
            this.getList = dataService.getParticipants;

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
                url: "/participants?selectedId"
            })
        }])
}
