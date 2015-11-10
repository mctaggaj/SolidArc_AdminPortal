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

    export class HomeController {
        private tileService: Tile.TileService;

        public static controllerId = "HomeController";
        public static moduleId = Home.moduleId + "." + HomeController.controllerId;

        public static $inject = ["$scope","$stateParams",Tile.TileService.serviceId, Tile.TitleForFilter.TitleForFilterService.serviceId];
        constructor (private $scope: IHomeControllerScope, $stateParams: IHomeStateParams, tileService: Tile.TileService, titleForFilterService: Tile.TitleForFilter.TitleForFilterService) {
            this.$scope = $scope;
            this.$scope.clickTile = (tile: Tile.ITile) => this.tileService.executeTile(tile);
            this.tileService = tileService;
            titleForFilterService.getTitleForFilter($stateParams.filter).then((title: string) => {
                this.$scope.title = title;
            }, () => {
                this.$scope.title = "Dashboard";
            })
            this.tileService.getTilesForFilter($stateParams.filter).then((tiles: Tile.ITile[]) => {
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
}