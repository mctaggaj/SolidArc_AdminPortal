/// <reference path="../AppGlobals.ts" />
module App.Administrator {

    export var moduleId = App.moduleId + ".Administrator";
    export var baseUrl = App.baseUrl + "Administrator/";

    export var state = "administrator"

    export var administrators = [
        {
            id: getNextId()+"",
            FIRSTNAME: "Steve",
            LASTNAME: "Jackson",
            mail: "Admin1@mx.com",
            password: "[RESET BUTTON HERE]"
        },
        {
            id: getNextId()+"",
            FIRSTNAME: "Austin",
            LASTNAME: "McQueen",
            mail: "Admin2@mx.com",
            password: "[RESET BUTTON HERE]"
        }
    ];
}