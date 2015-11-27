/// <reference path="../AppGlobals.ts" />

module App.Auth {

    import IItem = SolidArc.IItem;
    export var moduleId = App.moduleId + ".Auth";
    export var baseUrl = App.baseUrl + "Auth/";

    export var LS_Username = "SolidArc.Auth.Username";
    export var LS_Event = "SolidArc.Auth.Event";
    export var LS_UserId = "SolidArc.Auth.UserId";
    export var LS_UserToken = "SolidArc.Auth.UserToken";

    export var LS_UseMocks_Auth = "SolidArc.Auth.UseMocks.Auth";

    export interface IAdministrator extends IItem {
        email: string;
        password: string;
    }
}