/// <reference path="AppGlobals.ts"/>
/// <reference path="Auth/AuthModule.ts"/>
/// <reference path="Data/DataModule.ts"/>
/// <reference path="Shell/ShellModule.ts"/>
/// <reference path="Home/HomeModule.ts"/>
/// <reference path="Login/LoginModule.ts"/>
/**
 * The App module.
 * Contains all sub-modules and implementation required for the app
 */
module App {
    var dep = App.getChildModuleIds(App,["ui.bootstrap", "ui.router", "app-partials", "ngAnimate", "naif.base64"]);
    var app = angular.module(App.moduleId, dep);
}

