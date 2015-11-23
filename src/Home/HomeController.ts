/// <reference path="HomeGlobals.ts" />
module App.Home {

    interface IHomeControllerScope extends ng.IScope{
        tiles: Tile.ITile[];
        clickTile(tile: Tile.ITile):void;
        title: string;
    }

    interface IHomeStateParams {
        filter: string;
    }

    export class HomeController extends App.SubParameterController{
        public static controllerId = "HomeController";
        public static moduleId = Home.moduleId + "." + HomeController.controllerId;

        public static $inject = ["$scope","$stateParams", "$rootScope", "$state", Tile.TileService.serviceId, Tile.TitleForFilter.TitleForFilterService.serviceId];
        constructor (private $scope: IHomeControllerScope, protected $stateParams: IHomeStateParams, $rootScope:ng.IRootScopeService, $state: ng.ui.IStateService, private tileService: Tile.TileService, private titleForFilterService: Tile.TitleForFilter.TitleForFilterService) {
            super($scope, $stateParams, $rootScope, $state, state);
            this.$scope = $scope;
            this.$stateParams = $stateParams;
            this.$scope.clickTile = (tile: Tile.ITile) => this.tileService.executeTile(tile);
            this.tileService = tileService;
            this.titleForFilterService = titleForFilterService;
            this.didUpdateParams();
        }

        public didUpdateParams = () => {
            this.titleForFilterService.getTitleForFilter(this.$stateParams.filter).then((title: string) => {
                this.$scope.title = title
            }, () => {
                this.$scope.title = "Dashboard";
            })
            this.tileService.getTilesForFilter(this.$stateParams.filter).then((tiles: Tile.ITile[]) => {
                this.$scope.tiles = tiles;
            }, () => {
                // Todo: Handle failure
            })
        }

    }

// Angular module and controller registration
angular.module(HomeController.moduleId, [Tile.moduleId]).
    controller(HomeController.controllerId, HomeController)
    .config(["$stateProvider", ($stateProvider: ng.ui.IStateProvider) => {
        $stateProvider.state(Home.state, {
            templateUrl: Home.baseUrl+'home.html',
            controller: HomeController.controllerId,
            url: "/home/{filter}"
        })
    }])
    .config(["$urlRouterProvider", ($urlRouterProvider: ng.ui.IUrlRouterProvider) => {
        $urlRouterProvider.otherwise("/home/")
    }]);
}