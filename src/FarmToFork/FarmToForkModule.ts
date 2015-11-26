/// <reference path="FarmToForkGlobals.ts"/>
/// <reference path="FarmToForkService.ts"/>
/// <reference path="FarmToForkController.ts"/>

module App.FarmToFork {

    // Makes App.Auth module
    angular.module(FarmToFork.moduleId, App.getChildModuleIds(FarmToFork));
}