/// <reference path="HomeGlobals.ts" />
module App.Home {

    interface IHomeControllerShell extends ng.IScope{
        tiles: Tile.ITile[];
        clickTile(tile: Tile.ITile):void;
    }

    interface IHomeStateParams {
        filter: string;
    }

    export class HomeController {
        private tileService: Tile.TileService;

        public static controllerId = "HomeController";
        public static moduleId = Home.moduleId + "." + HomeController.controllerId;

        public static $inject = ["$scope","$stateParams",Tile.TileService.serviceId];
        constructor (private $scope: IHomeControllerShell, $stateParams: IHomeStateParams, tileService: Tile.TileService) {
            this.$scope = $scope;
            this.$scope.clickTile = (tile: Tile.ITile) => this.tileService.executeTile(tile);
            this.tileService = tileService;
            this.tileService.getTilesForFilter($stateParams.filter).then((tiles: Tile.ITile[]) => {
                this.$scope.tiles = tiles;
            }, () => {
                // Todo: Handle failure
            })
        }
    }

    // Angular module and controller registration
    angular.module(HomeController.moduleId, []).
        controller(HomeController.controllerId, HomeController)
        .config(["$stateProvider", ($stateProvider: ng.ui.IStateProvider) => {
            $stateProvider.state(Home.state, {
                templateUrl: Home.baseUrl+'home.html',
                controller: HomeController.controllerId,
                url: "/home/{filter}"
            })
        }])
}