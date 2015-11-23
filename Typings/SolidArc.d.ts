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
    export interface IUser {

        /**
         * ID of user, primary key
         */
        userId: number;

        /**
         * Username if set
         */
        username: string;

        /**
         * Password if set
         */
        password: string;
        /**
         * Session token
         */
        token: string;

         /**
          * The event that the user is a part of
          */
         event: string;
    }
}
