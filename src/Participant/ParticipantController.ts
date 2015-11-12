/// <reference path="ParticipantGlobals.ts" />
module App.Participant {

    interface IParticipantControllerScope extends App.IListDetailScope{
        list: IParticipant[];
    }

    interface IParticipantStateParams extends App.IListDetailStateParams {
    }

    export class ParticipantController extends App.ListDetailController<Participant.IParticipant>{

        public static controllerId = "ParticipantController";
        public static moduleId = Home.moduleId + "." + ParticipantController.controllerId;


        public static $inject = ["$scope","$stateParams","$rootScope", "$state", Data.DataService.serviceId];
        constructor (protected $scope: IParticipantControllerScope , protected $stateParams: IParticipantStateParams, $rootScope:ng.IRootScopeService, protected $state: ng.ui.IStateService) {
            super($scope, $stateParams, $rootScope, $state, state);
            this.$scope.list = [].concat(unassignedParticipants);
            for (var i = 0 ; i < Team.teams.length ; i ++) {
                var team = Team.teams[i]
                this.$scope.list.push(team.captain);
                for (var j = 0 ; j < team.participants.length ; j ++) {
                    this.$scope.list.push(team.participants[j]);
                }
            }
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
