/// <reference path="FarmToForkGlobals.ts"/>
/// <reference path="FarmToForkService.ts"/>

module App.FarmToFork {

    // Makes App.Auth module
    angular.module(FarmToFork.moduleId, App.getChildModuleIds(FarmToFork));
}