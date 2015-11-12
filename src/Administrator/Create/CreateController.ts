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
            var administratorInfo = {
                id : "",
                username: "",
                mail : "",
                password: ""
            };

            administratorInfo.id = "-1";
            administratorInfo.username = this.scope.info.mail;
            administratorInfo.mail = this.scope.info.mail;
            administratorInfo.password = this.scope.info.password;

            Administrator.administrators.push(administratorInfo);

            this.$state.go(Administrator.state, {selectedId: administratorInfo.id});

        };

    }

    // Angular module and controller registration
    angular.module(CreateController.moduleId, [Data.moduleId]).
        controller(CreateController.controllerId, CreateController)
        .config(["$stateProvider", ($stateProvider: ng.ui.IStateProvider) => {
            $stateProvider.state(Create.state, {
                templateUrl: Create.baseUrl+'create.html',
                controller: CreateController.controllerId,
                url: "/administrator/create"
            })
        }])
}
