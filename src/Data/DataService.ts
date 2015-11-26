/// <reference path="DataGlobals.ts" />
module App.Data {

    import IParticipant = SolidArc.IParticipant;
    import ITeam = SolidArc.ITeam;
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


        public getParticipants = ():ng.IPromise<IParticipant> => {
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
        id: getNextId()+"",
        LASTNAME: "Bryant",
        FIRSTNAME: "Seth",
        email: "BryantSeth@gmai"
    },{
        id: getNextId()+"",
        LASTNAME: "Beckham",
        FIRSTNAME: "Jimmy",
        email: "BeckhamJimmy@gmail.com"
    },{
        id: getNextId()+"",
        LASTNAME: "Rodgers",
        FIRSTNAME: "Kemp",
        email: "RodgersKemp@gmail.com"
    },{
        id: getNextId()+"",
        LASTNAME: "Riley",
        FIRSTNAME: "Clair",
        email: "RileyClair@gmail.com"
    },{
        id: getNextId()+"",
        LASTNAME: "Jordan",
        FIRSTNAME: "Michael",
        email: "MichaelJordan@gmail.com"
    }
    ]
    var teams: ITeam[] = [
        {
            id: getNextId()+"",
            name: "Hallow-Treats",
            captain: {id: getNextId()+"", LASTNAME: "Graham",  FIRSTNAME:"Chris", email: "Chris.Graham@gmail.com"},
            participants: [
                {id: getNextId()+"", LASTNAME: "Smith",  FIRSTNAME:"Greg", email: "Greg.Smith@gmail.com"},
                {id: getNextId()+"", LASTNAME: "Hogg",  FIRSTNAME:"Paul", email: "Paul.Hogg@gmail.com"}
            ]
        },
        {
            id: getNextId()+"",
            name: "Dream Team",
            captain: {id: getNextId()+"", LASTNAME: "Walker",  FIRSTNAME:"Rachelle", email: "Rachelle.Smith@gmail.com"},
            participants: []
        },
        {
            id: getNextId()+"",
            name: "Red Jays",
            captain: {id: getNextId()+"", LASTNAME: "Bryant",  FIRSTNAME:"Cathy", email: "Cathy.Bryant@gmail.com"},
            participants: [
                {id: getNextId()+"", LASTNAME: "Hill",  FIRSTNAME:"Leah", email: "Leah.Hill@gmail.com"},
                {id: getNextId()+"", LASTNAME: "Phillips",  FIRSTNAME:"Julie", email: "Julie.Phillips@gmail.com"}
            ]
        },
        {
            id: getNextId()+"",
            name: "Team Yellow",
            captain: {id: getNextId()+"", LASTNAME: "Rico",  FIRSTNAME:"Marry", email: "Marry.Rico@gmail.com"},
            participants: [
                {id: getNextId()+"", LASTNAME: "Mendoza",  FIRSTNAME:"Jacklyn", email: "Jacklyn.Mendoza@gmail.com"},
                {id: getNextId()+"", LASTNAME: "Roach",  FIRSTNAME:"Brian", email: "Brian.Roach@gmail.com"}
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
                return;
            }

            // Events
            localStorageService.set(LS_UseMocks_Events,$location.search()["mockEvents"]);
            if(master&&!(localStorageService.get(LS_UseMocks_Events)==="false"||localStorageService.get(LS_UseMocks_Events)===false))
            {
                // do not bother server, respond with given content
                $httpBackend.whenGET('/api/events').respond(function (method:string, url:string, data:any, headers:any, params:any) {
                    return [200, {events: [{name: "Guelph 2016"}, {name: "Laurier 2016"}]}];
                });
            }
            else {
                $httpBackend.whenGET('/api/events').passThrough();
            }


            // Participants
            localStorageService.set(LS_UseMocks_Participants,$location.search()["mockParticipants"]);
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
                        list.push(team.captain);
                        for (var j = 0; j < team.participants.length; j++) {
                            list.push(team.participants[j]);
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
            localStorageService.set(LS_UseMocks_Teams,$location.search()["mockTeams"]);
            if(master&&!(localStorageService.get(LS_UseMocks_Teams)==="false"||localStorageService.get(LS_UseMocks_Teams)===false)) {
                $httpBackend.whenGET(/\/api\/teams(.*)/).respond(function (method:string, url:string, data:any, headers:any, params:any) {
                    var regex = /\/api\/teams\?id=(.*)/;
                    var match = url.match(regex);
                    if (match) {
                        var id = match[1];
                        for (var i = 0; i < teams.length; i++) {
                            if (id === teams[i].id) {
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
                        if (newVal.id === teams[i].id) {
                            oldVal = teams[i];
                            teamIndex = i;
                            break;
                        }
                    }

                    // Removes all participants from the team
                    while (oldVal.participants && oldVal.participants.length) {
                        unassignedParticipants.push(oldVal.participants[0]);
                        oldVal.participants.splice(0, 1);
                    }

                    // Adds participants to the team
                    for (var i = 0; i < newVal.participants.length; i++) {
                        for (var j = 0; j < unassignedParticipants.length; j++) {
                            if (unassignedParticipants[j].id === newVal.participants[i].id) {
                                unassignedParticipants.slice(j, 1);
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
                        if (data.captain.id === unassignedParticipants[i].id) {
                            data.captain = unassignedParticipants[i];
                            break;
                        }
                    }
                    var index = unassignedParticipants.indexOf(data.captain);
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