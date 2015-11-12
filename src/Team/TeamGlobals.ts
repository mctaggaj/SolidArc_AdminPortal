/// <reference path="../AppGlobals.ts" />
module App.Team {

    export var moduleId = App.moduleId + ".Team";
    export var baseUrl = App.baseUrl + "Team/";

    export var state = "teams"

    export interface ITeam extends IItem{
        name: string;
        captain: Participant.IParticipant;
        participants: Participant.IParticipant[];
    }

    export var teams: ITeam[] = [
        {
            id: "1",
            name: "Team 1",
            captain: {id: "7", name: "Captain 1"},
            participants: [
                {id: "5", name: "Participant 1"},
                {id: "6", name: "Participant 2"}
            ]
        },
        {
            id: "2",
            name: "Team 2",
            captain: {id: "8", name: "Captain 2"},
            participants: []
        }
    ]
}