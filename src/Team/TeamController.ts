/// <reference path="TeamGlobals.ts" />
module App.Team {

    interface ITeam extends IItem{
        name: string;
        captain: any;
        participants: any[];
    }

    interface ITeamControllerScope extends App.IListDetailScope{
    }

    interface ITeamStateParams extends App.IListDetailStateParams {
    }

    export class TeamController extends App.ListDetailController<ITeam>{

        public static controllerId = "TeamController";
        public static moduleId = Team.moduleId + "." + TeamController.controllerId;

        public static $inject = ["$scope","$stateParams","$rootScope", "$state", Data.DataService.serviceId];
        constructor (protected $scope: ITeamControllerScope , protected $stateParams: ITeamStateParams, $rootScope:ng.IRootScopeService, protected $state: ng.ui.IStateService) {
            super($scope, $stateParams, $rootScope, $state, state);
            this.$scope = $scope;
            this.$scope.list = [
                {
                    id: "1",
                    name: "Team 1",
                    captain: {name: "Captain 1"},
                    participants: [
                        {name: "Participant 1"},
                        {name: "Participant 2"}
                    ]
                },
                {
                    id: "2",
                    name: "Team 2"
                }
            ]
            this.didUpdateParams();
        }
    }

    // Angular module and controller registration
    angular.module(TeamController.moduleId, [Data.moduleId]).
        controller(TeamController.controllerId, TeamController)
        .config(["$stateProvider", ($stateProvider: ng.ui.IStateProvider) => {
            $stateProvider.state(Team.state, {
                templateUrl: Team.baseUrl+'team.html',
                controller: TeamController.controllerId,
                url: "/teams?selectedId"
            })
        }])
}