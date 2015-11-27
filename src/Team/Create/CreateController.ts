/// <reference path="CreateGlobals.ts" />
module App.Team.Create {

    import IParticipant = SolidArc.IParticipant;
    import ITeam = SolidArc.ITeam;
    interface ICreateControllerScope extends ng.IScope{
        participants: IParticipant[];
        teamName: string;
        teamCaptain: IParticipant;
        create: () => void;
    }

    export class CreateController {
        public static controllerId = "CreateTeamController";
        public static moduleId = Create.moduleId + "." + CreateController.controllerId;

        public static $inject = ["$scope", "$state", Data.DataService.serviceId];
        constructor (private $scope: ICreateControllerScope, $state: ng.ui.IStateService, private dataService: Data.DataService) {
            this.$scope = $scope;
            dataService.getUnassignedParticipants()
                .then((items: IParticipant[]) =>{
                    this.$scope.participants = items;
                })

            this.$scope.create = () => {
                var name = this.$scope.teamName;
                var captain = JSON.parse(<any>this.$scope.teamCaptain);
                for (var i = 0 ; i < this.$scope.participants.length ; i ++)
                {
                    if(captain.id === this.$scope.participants[i].USERID) {
                        captain = this.$scope.participants[i];
                        captain.ISTEAMCAPTAIN = true;
                        break;
                    }
                }
                var team = {
                    TEAMID: getNextId()+"",
                    TEAMNAME: name,
                    TEAMMEMBERS: [captain]
                }

                this.dataService.createTeam(team).then((team: ITeam) => {
                    $state.go("teams", {selectedId: team.TEAMID});
                })
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