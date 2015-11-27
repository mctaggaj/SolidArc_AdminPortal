/**
 * The Typescript declarations for SolidArc objects
 */
declare module SolidArc {

    /**
     * An id returned from the database
     */
    export interface IId extends Number{}

    /**
     * Response message from API calls
    **/
    export interface IResponse {
        msg: string;
        data?: any;
    }

     /**
     * Permissions/roles
     */
    export interface IUser extends IItem{
         USERID: string;
         FIRSTNAME: string;
         LASTNAME: string;
         EMAIL: string;
         USERNAME?: string;
         CREATEIONDATE?: string;
         PASSWORD?: string;
         TEAMID?: string;
         ACCESS?: string;
         TOKEN?: string;
         ISSTUDENT?: boolean;
         ISTEAMCAPTAIN?: boolean;
         EVENTID?: string;
    }

    export interface IItem {
    }


    export interface IParticipant extends IUser{

    }


    export interface ITeam extends IItem{
        TEAMNAME: string;
        TEAMID: string;
        NUMMEMBERS?: string;
        TEAMMEMBERS: IParticipant[];
    }
}
