/// <reference path="../AppGlobals.ts" />
module App.Participant {

    export var moduleId = App.moduleId + ".Participant";
    export var baseUrl = App.baseUrl + "Participant/";

    export var state = "participant"


    export interface IParticipant extends IItem{
        name: string;
        email?: string;
        password?: string;
    }

    export var unassignedParticipants:IParticipant [] = [{
        id: getNextId()+"",
        name: "Bryant, Seth",
        email: "BryantSeth@gmai"
    },{
        id: getNextId()+"",
        name: "Beckham, Jimmy",
        email: "BeckhamJimmy@gmail.com"
    },{
        id: getNextId()+"",
        name: "Rodgers, Kemp",
        email: "RodgersKemp@gmail.com"
    },{
        id: getNextId()+"",
        name: "Riley, Clair",
        email: "RileyClair@gmail.com"
    },{
        id: getNextId()+"",
        name: "Michael, Jordan",
        email: "MichaelJordan@gmail.com"
    }
    ]
}