/// <reference path="../AppGlobals.ts" />

module App.Auth {

    export var moduleId = App.moduleId + ".Auth";
    export var baseUrl = App.baseUrl + "Auth/";

    export var LS_Username = "SolidArc.Auth.Username";
    export var LS_UserId = "SolidArc.Auth.UserId";
    export var LS_UserToken = "SolidArc.Auth.UserToken";

    export interface IAdministrator extends App.IItem {
        email: string;
        password: string;
    }
}