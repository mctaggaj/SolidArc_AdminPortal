/// <reference path="../AppGlobals.ts" />
module App.Administrator {

    export var moduleId = App.moduleId + ".Administrator";
    export var baseUrl = App.baseUrl + "Administrator/";

    export var state = "administrator"

    export var administrators = [
        {
            id: "1",
            username: "Administrator 1",
            mail: "Admin1@mx.com",
            password: "[RESET BUTTON HERE]"
        },
        {
            id: "2",
            username: "Administrator 2",
            mail: "Admin2@mx.com",
            password: "[RESET BUTTON HERE]"
        }
    ];
}