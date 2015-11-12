/// <reference path="RoutesGlobals.ts" />
/// <reference path="Create/CreateModule.ts" />
/// <reference path="RoutesController.ts" />
module App.Routes {
    angular.module(Routes.moduleId, App.getChildModuleIds(Routes));
}
