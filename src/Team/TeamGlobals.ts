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
        },
        {
            id: "10",
            name: "Team 3",
            captain: {id: "9", name: "Captain 3"},
            participants: [
                {id: "7", name: "Participant 3"},
                {id: "8", name: "Participant 4"}
            ]
        },
        {
            id: "11",
            name: "Team 4",
            captain: {id: "10", name: "Captain 4"},
            participants: [
                {id: "9", name: "Participant 5"},
                {id: "10", name: "Participant 6"}
            ]
        }
    ]
}