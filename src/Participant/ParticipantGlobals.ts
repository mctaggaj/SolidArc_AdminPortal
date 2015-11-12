/// <reference path="../AppGlobals.ts" />
module App.Participant {

    export var moduleId = App.moduleId + ".Participant";
    export var baseUrl = App.baseUrl + "Participant/";

    export var state = "participant"


    export interface IParticipant extends IItem{
        name: string;
    }

    export var unassignedParticipants:IParticipant [] = [{
        id: "0",
        name: "Bryant, Seth"
    },{
        id: "1",
        name: "Beckham, Jimmy"
    },{
        id: "2",
        name: "Rodgers, Kemp",
    },{
        id: "3",
        name: "Riley, Clair",
    },{
        id: "4",
        name: "Michael, Jordan",
    }
    ]
}