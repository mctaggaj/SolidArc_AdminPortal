/// <reference path="StatisticsGlobals.ts" />
module App.Statistics {

    interface IStatisticsControllerScope extends App.IListDetailScope{
    }

    interface IStatisticsStateParams extends App.IListDetailStateParams {
    }

    export class StatisticsController {

        public static controllerId = "StatisticsController";
        public static moduleId = Home.moduleId + "." + StatisticsController.controllerId;

        public static $inject = ["$scope","$stateParams","$rootScope", "$state", Data.DataService.serviceId];
        constructor (protected $scope: IStatisticsControllerScope , protected $stateParams: IStatisticsStateParams, $rootScope:ng.IRootScopeService, protected $state: ng.ui.IStateService, private dataService: Data.DataService) {


        }
    }

    // Angular module and controller registration
    angular.module(StatisticsController.moduleId, [Data.moduleId]).
        controller(StatisticsController.controllerId, StatisticsController)
        .config(["$stateProvider", ($stateProvider: ng.ui.IStateProvider) => {
            $stateProvider.state(Statistics.state, {
                templateUrl: baseUrl+'statistics.html',
                controller: StatisticsController.controllerId,
                url: "/statistics"
            })
        }])

}
