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
         * email, only initialized if constructed by authorized user
         */
        // email: string;

        /**
         * Username if set
         */
        username: string;

        /**
         * Password if set
         */
        password: string;

        /**
         * First name of user
         */
        firstName: string;

        /**
         * Last name of user
         */
        lastName: string;

        /**
         * Session token
         */
        token: string;

        /**
         * Bio of user
         */
        bio: string;


        /**
         * User picture (not always populated)
         */
        picture: string;
    }
}
