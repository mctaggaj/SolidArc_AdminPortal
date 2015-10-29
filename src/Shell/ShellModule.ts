/// <reference path="ShellGlobals.ts" />
/// <reference path="ShellController.ts" />
module App.Shell {
    angular.module(Shell.moduleId, App.getChildModuleIds(Shell));
}