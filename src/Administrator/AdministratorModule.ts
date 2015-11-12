/// <reference path="AdministratorGlobals.ts" />
/// <reference path="Create/CreateModule.ts" />
/// <reference path="Edit/EditModule.ts" />
/// <reference path="AdministratorController.ts" />
module App.Administrator {
    angular.module(Administrator.moduleId, App.getChildModuleIds(Administrator));
}