/// <reference path="CreateGlobals.ts" />
module App.Participant.Create {

    interface ICreateControllerScope extends ng.IScope{
        participant: any;
        create: () => void;
        info: {
            id : string;
            last: string;
            first: string;
            mail : string;
            mail2 : string;
            password: string;
            password2: string;
        };
        mailMatch: boolean;
        passwordMatch: boolean;
    }

    export class CreateController {
        public static controllerId = "CreateParticipantController";
        public static moduleId = Create.moduleId + "." + CreateController.controllerId;

        public static $inject = ["$scope", "$state", Data.DataService.serviceId];
        constructor (private scope: ICreateControllerScope, private $state:ng.ui.IStateService, private dataService: Data.DataService) {
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

            var info: IParticipant = {
                id : getNextId()+"",
                LASTNAME: this.scope.info.last,
                FIRSTNAME: this.scope.info.first,
                email : this.scope.info.mail,
                password: this.scope.info.password
            };

            this.dataService.createParticipant(info).then(
                (participant: IParticipant) => {
                    this.$state.go(Participant.state, {selectedId: participant.id});
                }
            )


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
