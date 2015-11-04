/// <reference path="TileGlobals.ts"/>
/// <reference path="TileService.ts"/>

module App.Tile {
    // Makes App.Auth module
    angular.module(Tile.moduleId, App.getChildModuleIds(Tile));
}