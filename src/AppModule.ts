/// <reference path="AppGlobals.ts"/>
/// <reference path="Auth/AuthModule.ts"/>
/// <reference path="Data/DataModule.ts"/>
/// <reference path="Tile/TileModule.ts"/>
/// <reference path="Shell/ShellModule.ts"/>
/// <reference path="Home/HomeModule.ts"/>
/// <reference path="Participant/ParticipantModule.ts"/>
/// <reference path="Administrator/AdministratorModule.ts"/>
/// <reference path="Team/TeamModule.ts"/>
/// <reference path="Login/LoginModule.ts"/>
/// <reference path="SelectEvent/SelectEventModule.ts"/>
/// <reference path="Routes/RoutesModule.ts"/>
/**
 * The App module.
 * Contains all sub-modules and implementation required for the app
 */
module App {
    var dep = App.getChildModuleIds(App,["ui.bootstrap", "ui.router", "app-partials", "ngAnimate", "naif.base64"]);
    var app = angular.module(App.moduleId, dep);


    app.directive('dynamic', function ($compile) {
        return {
            restrict: 'A',
            replace: true,
            scope: {msg: '=dynamic'},
            link: function postLink(scope, element) {
                scope.$watch('msg', function (msg) {
                    element.html(msg.html);
                    $compile(element.contents())(scope);
                }, true);
            }
        };
    });
}

