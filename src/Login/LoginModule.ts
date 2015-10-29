/// <reference path="LoginGlobals.ts" />
/// <reference path="LoginController.ts" />

module App.Login {
    angular.module(Login.moduleId, App.getChildModuleIds(Login));
}