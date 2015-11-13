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
            name: "Hallow-Treats",
            captain: {id: getNextId()+"", name: "Graham, Chris", email: "Chris.Graham@gmail.com"},
            participants: [
                {id: getNextId()+"", name: "Smith, Greg", email: "Greg.Smith@gmail.com"},
                {id: getNextId()+"", name: "Hogg, Paul", email: "Paul.Hogg@gmail.com"}
            ]
        },
        {
            id: getNextId()+"",
            name: "Dream Team",
            captain: {id: getNextId()+"", name: "Walker, Rachelle", email: "Rachelle.Smith@gmail.com"},
            participants: []
        },
        {
            id: getNextId()+"",
            name: "Red Jays",
            captain: {id: getNextId()+"", name: "Bryant, Cathy", email: "Cathy.Bryant@gmail.com"},
            participants: [
                {id: getNextId()+"", name: "Hill, Leah", email: "Leah.Hill@gmail.com"},
                {id: getNextId()+"", name: "Phillips, Julie", email: "Julie.Phillips@gmail.com"}
            ]
        },
        {
            id: getNextId()+"",
            name: "Team Yellow",
            captain: {id: getNextId()+"", name: "Rico, Marry", email: "Marry.Rico@gmail.com"},
            participants: [
                {id: getNextId()+"", name: "Mendoza, Jacklyn", email: "Jacklyn.Mendoza@gmail.com"},
                {id: getNextId()+"", name: "Roach, Brian", email: "Brian.Roach@gmail.com"}
            ]
        }
    ]
}