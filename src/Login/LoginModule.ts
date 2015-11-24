/// <reference path="LoginGlobals.ts" />
/// <reference path="LoginController.ts" />
/// <reference path="Forgot/ForgotModule.ts" />

module App.Login {
    angular.module(Login.moduleId, App.getChildModuleIds(Login));
}