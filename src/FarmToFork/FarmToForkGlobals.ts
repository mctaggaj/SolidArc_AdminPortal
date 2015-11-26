/// <reference path="../AppGlobals.ts" />

module App.FarmToFork {
    export var moduleId = App.moduleId + ".FarmToFork";
    export var baseUrl = App.baseUrl + "FarmToFork/";
    export var state = "farmToFork";

    export interface INeeds {
        need_id: string;
        quantity: number;
        units: string;
        date: Date;
        pantry_id: number;
        user_id: number;
        item_title: string;
        description: string;
        category: string;
        is_perishable: number;
        is_refrigerated: number;
        need_type: number;
    }
}