/// <reference path="RoutesGlobals.ts" />
/// <reference path="RoutesController.ts" />
module App.Routes {
    angular.module(Routes.moduleId, App.getChildModuleIds(Routes));
}
