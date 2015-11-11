/// <reference path="TeamGlobals.ts" />
/// <reference path="Create/CreateModule.ts" />
/// <reference path="Edit/EditModule.ts" />
/// <reference path="TeamController.ts" />
module App.Team {
    angular.module(Team.moduleId, App.getChildModuleIds(Team));
}