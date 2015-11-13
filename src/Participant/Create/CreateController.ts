/// <reference path="CreateGlobals.ts" />
module App.Participant.Create {

    interface ICreateControllerScope extends ng.IScope{
        participant: any;
        create: () => void;
        info: {
            id : string;
            name: string;
            mail : string;
            mail2 : string;
            password: string;
            password2: string;
        };
    }

    export class CreateController {
        public static controllerId = "CreateParticipantController";
        public static moduleId = Create.moduleId + "." + CreateController.controllerId;

        private scope;

        public static $inject = ["$scope", "$state", Data.DataService.serviceId];
        constructor ($scope: ICreateControllerScope, private $state:ng.ui.IStateService, dataService: Data.DataService) {
            this.scope = $scope;
            this.scope.create = this.create;
        }


        private create = () => {

            this.scope.mailMatch = false;
            this.scope.passwordMatch = false;

            if (this.scope.info.mail != this.scope.info.mail2) {
                this.scope.mailMatch = true;
            }

            if (this.scope.info.password != this.scope.info.password2){
                this.scope.passwordMatch = true;
            }

            if (this.scope.passwordMatch === true || this.scope.mailMatch === true){
                return false;
            }

            var info = {
                id : getNextId()+"",
                name: this.scope.info.name,
                email : this.scope.info.mail,
                password: this.scope.info.password
            };


            Participant.unassignedParticipants.push(info);

            this.$state.go(Participant.state, {selectedId: info.id});

        };

    }

    // Angular module and controller registration
    angular.module(CreateController.moduleId, ['ui.validate', Data.moduleId]).
        controller(CreateController.controllerId, CreateController)
        .config(["$stateProvider", ($stateProvider: ng.ui.IStateProvider) => {
            $stateProvider.state(Create.state, {
                templateUrl: Create.baseUrl+'create.html',
                controller: CreateController.controllerId,
                url: "/participant/create"
            })
        }])
}
