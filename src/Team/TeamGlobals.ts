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
            id: getNextId()+"",
            name: "Team 1",
            captain: {id: getNextId()+"", name: "Captain 1"},
            participants: [
                {id: getNextId()+"", name: "Participant 1"},
                {id: getNextId()+"", name: "Participant 2"}
            ]
        },
        {
            id: getNextId()+"",
            name: "Team 2",
            captain: {id: getNextId()+"", name: "Captain 2"},
            participants: []
        },
        {
            id: getNextId()+"",
            name: "Team 3",
            captain: {id: getNextId()+"", name: "Captain 3"},
            participants: [
                {id: getNextId()+"", name: "Participant 3"},
                {id: getNextId()+"", name: "Participant 4"}
            ]
        },
        {
            id: getNextId()+"",
            name: "Team 4",
            captain: {id: getNextId()+"", name: "Captain 4"},
            participants: [
                {id: getNextId()+"", name: "Participant 5"},
                {id: getNextId()+"", name: "Participant 6"}
            ]
        }
    ]
}