/// <reference path="CreateGlobals.ts" />
module App.Team.Create {

    interface ICreateControllerScope extends ng.IScope{
        participants: Participant.IParticipant[];
        teamName: string;
        teamCaptain: Participant.IParticipant;
        create: () => void;
    }

    export class CreateController {
        public static controllerId = "CreateTeamController";
        public static moduleId = Create.moduleId + "." + CreateController.controllerId;

        public static $inject = ["$scope", "$state", Data.DataService.serviceId];
        constructor (private $scope: ICreateControllerScope, $state: ng.ui.IStateService, dataService: Data.DataService) {
            this.$scope = $scope;
            this.$scope.participants = Participant.unassignedParticipants;

            this.$scope.create = () => {
                var name = this.$scope.teamName;
                var captain = JSON.parse(<any>this.$scope.teamCaptain);
                for (var i = 0 ; i < Participant.unassignedParticipants.length ; i ++)
                {
                    if(captain.id === Participant.unassignedParticipants[i].id) {
                        captain = Participant.unassignedParticipants[i];
                        break;
                    }
                }
                var team = {
                    id: "3",
                    name: name,
                    participants: [],
                    captain: captain
                }
                Team.teams.push(team);
                var index = Participant.unassignedParticipants.indexOf(captain);
                if (index >= 0) {
                    Participant.unassignedParticipants.splice(index, 1);
                }
                $state.go("teams", {selectedId: team.id});
            }

        }
    }

    // Angular module and controller registration
    angular.module(CreateController.moduleId, [Data.moduleId]).
        controller(CreateController.controllerId, CreateController)
        .config(["$stateProvider", ($stateProvider: ng.ui.IStateProvider) => {
            $stateProvider.state(Create.state, {
                templateUrl: Create.baseUrl+'create.html',
                controller: CreateController.controllerId,
                url: "/team/create"
            })
        }])
}