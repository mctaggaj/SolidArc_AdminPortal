/// <reference path="FarmToForkGlobals.ts" />
module App.FarmToFork {

    interface IFarmToForkControllerScope extends App.IListDetailScope{
        needs: INeeds[]
    }

    interface IFarmToForkStateParams extends App.IListDetailStateParams {
    }

    export class FarmToForkController extends App.ListDetailController<any>{

        public static controllerId = "FarmToForkController";
        public static moduleId = FarmToFork.moduleId + "." + FarmToForkController.controllerId;

        public static $inject = ["$scope","$stateParams","$rootScope", "$state", FarmToFork.FarmToForkService.serviceId];
        constructor (protected $scope: IFarmToForkControllerScope , protected $stateParams: IFarmToForkStateParams, $rootScope:ng.IRootScopeService, protected $state: ng.ui.IStateService, private farmToForkService: FarmToFork.FarmToForkService) {
            super($scope, $stateParams, $rootScope, $state, state);
            this.idName = "need_id";
            this.getList = farmToForkService.getNeeds;
            this.didUpdateParams();
        }
    }

    // Angular module and controller registration
    angular.module(FarmToForkController.moduleId, [FarmToFork.FarmToForkService.moduleId]).
        controller(FarmToForkController.controllerId, FarmToForkController)
        .config(["$stateProvider", ($stateProvider: ng.ui.IStateProvider) => {
            console.log("Test")
            $stateProvider.state(state, {
                templateUrl: FarmToFork.baseUrl+'farmToFork.html',
                controller: FarmToForkController.controllerId,
                url: "/farmToFork?selectedId"
            })
        }])
}