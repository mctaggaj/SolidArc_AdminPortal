/// <reference path="CreateGlobals.ts" />
module App.Team.Create {

    import ParticipantController = App.Participant.ParticipantController;
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
                var captain = this.$scope.teamCaptain;
                Team.teams.push({
                    id: "3",
                    name: name,
                    participants: [],
                    captain: captain
                })
                var index = Participant.unassignedParticipants.indexOf(captain);
                if (index >= 0) {
                    Participant.unassignedParticipants.splice(index, 1);
                }
                $state.go("teams");
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