/// <reference path="../AppGlobals.ts" />
module App.Administrator {

    export var moduleId = App.moduleId + ".Administrator";
    export var baseUrl = App.baseUrl + "Administrator/";

    export var state = "administrator"

    export var administrators = [
        {
            id: getNextId()+"",
            username: "Administrator 1",
            mail: "Admin1@mx.com",
            password: "[RESET BUTTON HERE]"
        },
        {
            id: getNextId()+"",
            username: "Administrator 2",
            mail: "Admin2@mx.com",
            password: "[RESET BUTTON HERE]"
        }
    ];
}