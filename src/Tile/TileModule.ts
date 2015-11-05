/// <reference path="TileGlobals.ts"/>
/// <reference path="TileService.ts"/>
/// <reference path="TitleForFilter/TitleForFilterModule.ts"/>

module App.Tile {
    // Makes App.Auth module
    angular.module(Tile.moduleId, App.getChildModuleIds(Tile));
}