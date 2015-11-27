/// <reference path="DataGlobals.ts" />
module App.Data {

    import IParticipant = SolidArc.IParticipant;
    import ITeam = SolidArc.ITeam;
    import IRoute = SolidArc.IRoute;
    export interface IEventsResponse extends SolidArc.IResponse {
        data?: {events: any[]}
    }

    /**
     * Gets data from the api
     */
    export class DataService {
        public static serviceId = "DataService";
        public static moduleId = App.moduleId + "." + DataService.serviceId;
        public static $inject: string[] = ["$http", "$q", Auth.AuthService.serviceId];


        /**
         * The http service
         */
        private $http: ng.IHttpService;

        /**
         * The promise service
         */
        private $q: ng.IQService;

        /**
         * AuthService reference
         */
        private authService: Auth.AuthService

        /**
         * Creates a new DataService
         */
        constructor ($http: ng.IHttpService, $q: ng.IQService, authService: Auth.AuthService) {
            this.$http = $http;
            this.$q = $q;
            this.authService = authService
        }

        /**
         * Gets all events for the current user
         * @returns {ng.IPromise<SolidArc.IEventsResponse>}
         */
        public getEvents = ():ng.IPromise<IEventsResponse> => {
            var defered = this.$q.defer();
            this.$http.get("/api/events", {})
                .then(
                (response: ng.IHttpPromiseCallbackArg<any>) => {
                    // Success
                    defered.resolve({
                        msg: null,
                        data: response.data
                    });
                },
                (response: ng.IHttpPromiseCallbackArg<any>) => {
                    // Failure
                    defered.reject({
                        msg: response.data.msg
                    });
                });
            return defered.promise;
        }


        public getParticipants = ():ng.IPromise<IParticipant[]> => {
            var defered = this.$q.defer();
            this.$http.get("/api/participants", {})
                .then(
                    (response: ng.IHttpPromiseCallbackArg<any>)=>{
                        defered.resolve(response.data)
                    },
                    (response: ng.IHttpPromiseCallbackArg<any>) => {
                        // Failure
                        defered.reject({
                            msg: response.data.msg
                        });
                    });
            return defered.promise;
        }
        public getRoutes = ():ng.IPromise<IRoute[]> => {
          var defered = this.$q.defer();
          this.$http.get("/api/routes", {})
              .then(
                //success
                (response: ng.IHttpPromiseCallbackArg<any>) => {
                  defered.resolve(response.data.routes);
                },
                //error
                (response: ng.IHttpPromiseCallbackArg<any>) => {
                  defered.reject({msg: response.data.msg});
                }
              );
          return defered.promise;
        }
        public createParticipant = (participant: IParticipant):ng.IPromise<IParticipant> => {
            var defered = this.$q.defer();
            this.$http.post("/api/participants", {data:participant})
                .then(
                    (response: ng.IHttpPromiseCallbackArg<any>)=>{
                        defered.resolve(response.data)
                    },
                    (response: ng.IHttpPromiseCallbackArg<any>) => {
                        // Failure
                        defered.reject({
                            msg: response.data.msg
                        });
                    });
            return defered.promise;
        }
        public getUnassignedParticipants = ():ng.IPromise<IParticipant[]> => {
            var defered = this.$q.defer();
            this.$http.get("/api/participants/unassigned", {})
                .then(
                    (response: ng.IHttpPromiseCallbackArg<any>)=>{
                        defered.resolve(response.data)
                    },
                    (response: ng.IHttpPromiseCallbackArg<any>) => {
                        // Failure
                        defered.reject({
                            msg: response.data.msg
                        });
                    });
            return defered.promise;
        }



        // Teams
        public getTeams = ():ng.IPromise<ITeam[]> => {
            var defered = this.$q.defer();
            this.$http.get("/api/teams", {})
                .then(
                    (response: ng.IHttpPromiseCallbackArg<any>)=>{
                        defered.resolve(response.data)
                    },
                    (response: ng.IHttpPromiseCallbackArg<any>) => {
                        // Failure
                        defered.reject({
                            msg: response.data.msg
                        });
                    });
            return defered.promise;
        }
        public getTeam = (id: any):ng.IPromise<ITeam> => {
            var defered = this.$q.defer();
            this.$http.get("/api/teams", {params: {id: id}})
                .then(
                    (response: ng.IHttpPromiseCallbackArg<any>)=>{
                        defered.resolve(response.data)
                    },
                    (response: ng.IHttpPromiseCallbackArg<any>) => {
                        // Failure
                        defered.reject({
                            msg: response.data.msg
                        });
                    });
            return defered.promise;
        }
        public createTeam = (team: ITeam):ng.IPromise<ITeam> => {
            var defered = this.$q.defer();
            this.$http.post("/api/teams", {data:team})
                .then(
                    (response: ng.IHttpPromiseCallbackArg<any>)=>{
                        defered.resolve(response.data)
                    },
                    (response: ng.IHttpPromiseCallbackArg<any>) => {
                        // Failure
                        defered.reject({
                            msg: response.data.msg
                        });
                    });
            return defered.promise;
        }
        public editTeam = (team: ITeam):ng.IPromise<ITeam> => {
            var defered = this.$q.defer();
            this.$http.put("/api/teams", {data:team})
                .then(
                    (response: ng.IHttpPromiseCallbackArg<any>)=>{
                        defered.resolve(response.data)
                    },
                    (response: ng.IHttpPromiseCallbackArg<any>) => {
                        // Failure
                        defered.reject({
                            msg: response.data.msg
                        });
                    });
            return defered.promise;
        }

    }


    var unassignedParticipants:IParticipant [] = [{
        id:"",
        USERID: getNextId()+"",
        LASTNAME: "Bryant",
        FIRSTNAME: "Seth",
        EMAIL: "BryantSeth@gmai",
        USERNAME: "BryantSeth@gmai",
    },{
        id:"",
        USERID: getNextId()+"",
        LASTNAME: "Beckham",
        FIRSTNAME: "Jimmy",
        EMAIL: "BeckhamJimmy@gmail.com",
        USERNAME: "BeckhamJimmy@gmail.com"
    },{
        id:"",
        USERID: getNextId()+"",
        LASTNAME: "Rodgers",
        FIRSTNAME: "Kemp",
        EMAIL: "RodgersKemp@gmail.com",
        USERNAME: "RodgersKemp@gmail.com"
    },{
        id:"",
        USERID: getNextId()+"",
        LASTNAME: "Riley",
        FIRSTNAME: "Clair",
        EMAIL: "RileyClair@gmail.com",
        USERNAME: "RileyClair@gmail.com"
    },{
        id:"",
        USERID: getNextId()+"",
        LASTNAME: "Jordan",
        FIRSTNAME: "Michael",
        EMAIL: "MichaelJordan@gmail.com",
        USERNAME: "MichaelJordan@gmail.com"
    }
    ]
    var teams: ITeam[] = [
        {
            TEAMID: getNextId()+"",
            TEAMNAME: "Hallow-Treats",
            TEAMMEMBERS: [
                {
                    USERID: getNextId()+"",
                    LASTNAME: "Graham",
                    FIRSTNAME:"Chris",
                    EMAIL: "Chris.Graham@gmail.com",
                    USERNAME: "Chris.Graham@gmail.com",
                    ISTEAMCAPTAIN: true
                },
                {
                    USERID: getNextId()+"",
                    LASTNAME: "Smith",
                    FIRSTNAME:"Greg",
                    EMAIL: "Greg.Smith@gmail.com",
                    USERNAME: "Greg.Smith@gmail.com"},
                {
                    USERID: getNextId()+"",
                    LASTNAME: "Hogg",
                    FIRSTNAME:"Paul",
                    EMAIL: "Paul.Hogg@gmail.com",
                    USERNAME: "Paul.Hogg@gmail.com"}
            ]
        },
        {
            TEAMID: getNextId()+"",
            TEAMNAME: "Dream Team",
            TEAMMEMBERS: [{
                USERID: getNextId()+"",
                LASTNAME: "Walker",
                FIRSTNAME:"Rachelle",
                EMAIL: "Rachelle.Smith@gmail.com",
                USERNAME: "Rachelle.Smith@gmail.com",
                ISTEAMCAPTAIN: true}]
        },
        {
            TEAMID: getNextId()+"",
            TEAMNAME: "Red Jays",
            TEAMMEMBERS: [
                {
                    USERID: getNextId()+"",
                    LASTNAME: "Bryant",
                    FIRSTNAME:"Cathy",
                    EMAIL: "Cathy.Bryant@gmail.com",
                    USERNAME: "Cathy.Bryant@gmail.com",
                    ISTEAMCAPTAIN: true
                },
                {
                    USERID: getNextId()+"",
                    LASTNAME: "Hill",
                    FIRSTNAME:"Leah",
                    EMAIL: "Leah.Hill@gmail.com",
                    USERNAME: "Leah.Hill@gmail.com",
                    },
                {
                    USERID: getNextId()+"",
                    LASTNAME: "Phillips",
                    FIRSTNAME:"Julie",
                    EMAIL: "Julie.Phillips@gmail.com",
                    USERNAME: "Julie.Phillips@gmail.com"}
            ]
        },
        {
            TEAMID: getNextId()+"",
            TEAMNAME: "Team Yellow",
            TEAMMEMBERS: [
                {
                    USERID: getNextId()+"",
                    LASTNAME: "Rico",
                    FIRSTNAME:"Marry",
                    EMAIL: "Marry.Rico@gmail.com",
                    USERNAME: "Marry.Rico@gmail.com",
                    ISTEAMCAPTAIN: true},
                {
                    USERID: getNextId()+"",
                    LASTNAME: "Mendoza",
                    FIRSTNAME:"Jacklyn",
                    EMAIL: "Jacklyn.Mendoza@gmail.com",
                    USERNAME: "Jacklyn.Mendoza@gmail.com"},
                {
                    USERID: getNextId()+"",
                    LASTNAME: "Roach",
                    FIRSTNAME:"Brian",
                    EMAIL: "Brian.Roach@gmail.com",
                    USERNAME: "Brian.Roach@gmail.com"}
            ]
        }
    ]

    /**
     * Angular module and service registration
     */
    angular.module(DataService.moduleId, ["ngMockE2E"])
        .service(DataService.serviceId, DataService)
        .run(["$httpBackend", "$location", "localStorageService", function($httpBackend:angular.IHttpBackendService, $location: ng.ILocationService, localStorageService: ng.localStorage.ILocalStorageService) {

            // All Mocks
            if($location.search()["mock"]) {
                localStorageService.set(LS_UseMocks,$location.search()["mock"]);
            }
            var master = true;
            if(localStorageService.get(LS_UseMocks)==="false"||localStorageService.get(LS_UseMocks)===false)
            {
                master = false;
            }

            // Events
            if($location.search()["mockEvents"]) {
                localStorageService.set(LS_UseMocks_Events, $location.search()["mockEvents"]);
            }
            if(master&&!(localStorageService.get(LS_UseMocks_Events)==="false"||localStorageService.get(LS_UseMocks_Events)===false))
            {
                // do not bother server, respond with given content
                $httpBackend.whenGET('/api/events').respond(function (method:string, url:string, data:any, headers:any, params:any) {
                    return [200, {events: [{id: 1, name: "Guelph 2016"}, {id: 2, name: "Laurier 2016"}]}];
                });
            }
            else {
                $httpBackend.whenGET('/api/events').passThrough();
            }
            
            // Events
            localStorageService.set(LS_UseMocks_Routes,$location.search()["mockRoutes"]);
            if(master&&!(localStorageService.get(LS_UseMocks_Routes)==="false"||localStorageService.get(LS_UseMocks_Routes)===false))
            {
                // do not bother server, respond with given content
                $httpBackend.whenGET('/api/routes').respond(function (method:string, url:string, data:any, headers:any, params:any) {
                    var data: any = {
                      "routes": Routes.routes
                    }
                    return [/*status*/ 200, data];
                });
            }
            else {
                $httpBackend.whenGET('/api/routes').passThrough();
            }


            // Participants
            if($location.search()["mockParticipants"]) {
                localStorageService.set(LS_UseMocks_Participants, $location.search()["mockParticipants"]);
            }
            if(master&&!(localStorageService.get(LS_UseMocks_Participants)==="false"||localStorageService.get(LS_UseMocks_Participants)===false)) {
                $httpBackend.whenPOST('/api/participants').respond(function (method:string, url:string, data:IParticipant, headers:any, params:any) {
                    data = <any>JSON.parse(<any>data).data;
                    unassignedParticipants.push(data);
                    return [201, data];
                });
                $httpBackend.whenGET('/api/participants').respond(function (method:string, url:string, data:any, headers:any, params:any) {
                    var list = [].concat(unassignedParticipants);

                    for (var i = 0; i < teams.length; i++) {
                        var team = teams[i]
                        for (var j = 0; j < team.TEAMMEMBERS.length; j++) {
                            list.push(team.TEAMMEMBERS[j]);
                        }
                    }
                    return [201, list];
                });
                $httpBackend.whenGET('/api/participants/unassigned').respond(function (method:string, url:string, data:any, headers:any, params:any) {
                    return [200, unassignedParticipants];
                });
            }
            else {
                $httpBackend.whenPOST('/api/participants').passThrough();
                $httpBackend.whenGET('/api/participants').passThrough();
                $httpBackend.whenGET('/api/participants/unassigned').passThrough()
            }


            // Teams
            if($location.search()["mockTeams"]) {
                localStorageService.set(LS_UseMocks_Teams, $location.search()["mockTeams"]);
            }
            if(master&&!(localStorageService.get(LS_UseMocks_Teams)==="false"||localStorageService.get(LS_UseMocks_Teams)===false)) {
                $httpBackend.whenGET(/\/api\/teams(.*)/).respond(function (method:string, url:string, data:any, headers:any, params:any) {
                    var regex = /\/api\/teams\?id=(.*)/;
                    var match = url.match(regex);
                    if (match) {
                        var id = match[1];
                        for (var i = 0; i < teams.length; i++) {
                            if (id === teams[i].TEAMID) {
                                return [200, teams[i]];
                            }
                        }
                    }
                    return [200, teams];
                });
                $httpBackend.whenPUT('/api/teams').respond(function (method:string, url:string, newVal:ITeam, headers:any, params:any) {
                    var oldVal:ITeam;
                    var teamIndex = 0;
                    newVal = <any>JSON.parse(<any>newVal).data;
                    for (var i = 0; i < teams.length; i++) {
                        if (newVal.TEAMID === teams[i].TEAMID) {
                            oldVal = teams[i];
                            teamIndex = i;
                            break;
                        }
                    }

                    // Removes all participants from the team
                    while (oldVal.TEAMMEMBERS && oldVal.TEAMMEMBERS.length) {
                        unassignedParticipants.push(oldVal.TEAMMEMBERS[0]);
                        oldVal.TEAMMEMBERS.splice(0, 1);
                    }

                    // Adds participants to the team
                    for (var i = 0; i < newVal.TEAMMEMBERS.length; i++) {
                        for (var j = 0; j < unassignedParticipants.length; j++) {
                            if (unassignedParticipants[j].USERID === newVal.TEAMMEMBERS[i].USERID) {
                                unassignedParticipants.splice(j, 1);
                                j--
                                break;
                            }
                        }
                    }
                    teams[teamIndex] = newVal;

                    return [200, teams];
                });
                $httpBackend.whenPOST('/api/teams').respond(function (method:string, url:string, data:ITeam, headers:any, params:any) {

                    data = <any>JSON.parse(<any>data).data;
                    for (var i = 0; i < unassignedParticipants.length; i++) {
                        if (data.TEAMMEMBERS[0].USERID === unassignedParticipants[i].USERID) {
                            data.TEAMMEMBERS[0] = unassignedParticipants[i];
                            data.TEAMMEMBERS[0].ISTEAMCAPTAIN = true;
                            break;
                        }
                    }
                    var index = unassignedParticipants.indexOf(data.TEAMMEMBERS[0]);
                    if (index >= 0) {
                        unassignedParticipants.splice(index, 1);
                    }
                    teams.push(data)
                    return [201, data];
                });
            }
            else {
                $httpBackend.whenGET(/\/api\/teams(.*)/).passThrough();
                $httpBackend.whenPUT('/api/teams').passThrough();
                $httpBackend.whenPOST('/api/teams').passThrough();
            }
    }]);




}