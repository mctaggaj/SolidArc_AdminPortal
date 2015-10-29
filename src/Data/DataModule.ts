/// <reference path="DataGlobals.ts"/>
/// <reference path="DataService.ts"/>

module App.Data {

    // Makes App.Auth module
    angular.module(Data.moduleId, App.getChildModuleIds(Data));
}