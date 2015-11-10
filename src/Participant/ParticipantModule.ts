/// <reference path="ParticipantGlobals.ts" />
/// <reference path="Create/CreateModule.ts" />
/// <reference path="ParticipantController.ts" />
module App.Participant {
    angular.module(Participant.moduleId, App.getChildModuleIds(Participant));
}