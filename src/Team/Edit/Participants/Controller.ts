/// <reference path="Globals.ts" />
module App.Team.Edit.Participants {
    interface IControllerScope extends ng.IScope{
        team: ITeam;
        unassignedParticipants: Participant.IParticipant [];
        assign: (participant: Participant.IParticipant) => void;
        unassign: (participant: Participant.IParticipant) => void;
        done: () => void
    }
    interface IControllerStateParams {
        teamId: string
    }

    export class Controller {
        public static controllerId = "AssignParticipantsToTeamController";
        public static moduleId = Create.moduleId + "." + Controller.controllerId;

        public static $inject = ["$scope", "$state", "$stateParams",  Data.DataService.serviceId];
        constructor (private $scope: IControllerScope, $state: ng.ui.IStateService, $stateParams: IControllerStateParams, dataService: Data.DataService) {
            this.$scope = $scope;
            this.$scope.unassignedParticipants = App.Participant.unassignedParticipants;
            for (var i = 0 ; i < Team.teams.length ; i ++) {
                this.$scope.team = Team.teams[i];
            }

            function moveItemBetweenLists<T> (item: T, fromList: T[], toList:T[]) {
                var index = fromList.indexOf(item);
                if (index >=0 ){
                    fromList.splice(index, 1);
                    toList.push(item);
                }
            }
            this.$scope.assign = (participant: Participant.IParticipant) => moveItemBetweenLists(participant, this.$scope.unassignedParticipants, this.$scope.team.participants)
            this.$scope.unassign = (participant: Participant.IParticipant) => moveItemBetweenLists(participant, this.$scope.team.participants, this.$scope.unassignedParticipants)
            this.$scope.done = () => {
                $state.go(Team.state, {selectedId: $stateParams.teamId});
            }

        }
    }

    // Angular module and controller registration
    angular.module(Controller.moduleId, [Data.moduleId]).
        controller(Controller.controllerId, Controller)
        .config(["$stateProvider", ($stateProvider: ng.ui.IStateProvider) => {
            $stateProvider.state(Participants.state, {
                templateUrl: Participants.baseUrl+'template.html',
                controller: Controller.controllerId,
                url: "/team/edit/participants?teamId"
            })
        }])
}