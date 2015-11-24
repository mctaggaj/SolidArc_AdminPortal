/// <reference path="Globals.ts" />
module App.Team.Edit.Participants {
    import IParticipant = SolidArc.IParticipant;
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
        constructor (private $scope: IControllerScope, $state: ng.ui.IStateService, $stateParams: IControllerStateParams, private dataService: Data.DataService) {
            this.$scope = $scope;
            dataService.getTeam($stateParams.teamId).then((team: ITeam) => {
                this.$scope.team=team;
            })
            dataService.getUnassignedParticipants().then(
                (items: IParticipant[]) => {
                    this.$scope.unassignedParticipants = items;
                }
            )

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
                this.dataService.editTeam($scope.team).then((team: ITeam) => {
                    $state.go(Team.state, {selectedId: team.id});
                })
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