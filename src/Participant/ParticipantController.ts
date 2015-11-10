/// <reference path="ParticipantGlobals.ts" />
module App.Participant {

    interface IParticipantControllerScope extends ng.IScope{
        participants: any[];
        selectedParticipant: any;
        select: (participant: any) => void;
    }

    interface IParticipantStateParams {
        participantId: string;
    }

    export class ParticipantController {

        public static controllerId = "ParticipantController";
        public static moduleId = Home.moduleId + "." + ParticipantController.controllerId;

        public static $inject = ["$scope","$stateParams"];
        constructor (private $scope: IParticipantControllerScope, $stateParams: IParticipantStateParams) {
            this.$scope = $scope;
            this.$scope.participants = [
                {name: "Participant 1"},
                {name: "Participant 2"}
            ]
            this.$scope.select = (participant: any) => {
                this.$scope.selectedParticipant = participant;
            }
        }
    }

    // Angular module and controller registration
    angular.module(ParticipantController.moduleId, [Data.moduleId]).
        controller(ParticipantController.controllerId, ParticipantController)
        .config(["$stateProvider", ($stateProvider: ng.ui.IStateProvider) => {
            $stateProvider.state(Participant.state, {
                templateUrl: Participant.baseUrl+'participant.html',
                controller: ParticipantController.controllerId,
                url: "/participant?user={participantId}"
            })
        }])
}