/// <reference path="CreateGlobals.ts" />
module App.Administrator.Create {

    interface ICreateControllerScope extends ng.IScope{
        participant: any;
        create: () => void;
        info: {
            id : string;
            username: string;
            mail : string;
            mail2 : string;
            password: string;
            password2: string;
        };
    }

    export class CreateController {
        public static controllerId = "CreateAdministratorController";
        public static moduleId = Create.moduleId + "." + CreateController.controllerId;

        private scope;

        public static $inject = ["$scope", "$state", Data.DataService.serviceId];
        constructor ($scope: ICreateControllerScope, private $state:ng.ui.IStateService, dataService: Data.DataService) {
            this.scope = $scope;
            this.scope.createAdmin = this.createAdmin;
        }


        private createAdmin = () => {

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

            var administratorInfo = {
                id : "",
                username: "",
                mail : "",
                password: ""
            };

            administratorInfo.id = getNextId()+"";
            administratorInfo.username = this.scope.info.mail;
            administratorInfo.mail = this.scope.info.mail;
            administratorInfo.password = this.scope.info.password;

            Administrator.administrators.push(administratorInfo);

            this.$state.go(Administrator.state, {selectedId: administratorInfo.id});

        };

    }

    // Angular module and controller registration
    angular.module(CreateController.moduleId, ['ui.validate', Data.moduleId]).
        controller(CreateController.controllerId, CreateController)
        .config(["$stateProvider", ($stateProvider: ng.ui.IStateProvider) => {
            $stateProvider.state(Create.state, {
                templateUrl: Create.baseUrl+'create.html',
                controller: CreateController.controllerId,
                url: "/administrator/create"
            })
        }])
}
