/// <reference path="TileGlobals.ts" />
module App.Tile {


    export interface ITileTag extends String {}

    export interface ITileAction {
        state: string;
        stateParams: any;
    }

    export interface ITile {
        tags: ITileTag[];
        text: string;
        textColor: string;
        background: string;
        action: ITileAction;
    }

    /**
     * Gets tiles
     */
    export class TileService {
        public static serviceId = "TileService";
        public static moduleId = App.moduleId + "." + TileService.serviceId;
        public static $inject: string[] = ["$http", "$q", "$state"];

        /**
         * The http service
         */
        private $http: ng.IHttpService;

        /**
         * The promise service
         */
        private $q: ng.IQService;

        /**
         * The state service
         */
        private $state: ng.ui.IStateService;

        /**
         * Helper function to get the subset of an array where each item satisfies a condition
         * @param array The array to get the subset of
         * @param eval The function to test to condition
         * @returns {T[]} The subset
         */
        private getSubsetWhere<T>(array: T[], eval:(item: T)=>boolean):T[] {
            var subset:T[] = [];
            for (var i = 0 ; i < array.length ; i ++) {
                if(eval(array[i])) {
                    subset.push(array[i]);
                }
            }
            return subset;
        }

        /**
         * Helper function to create an eval function for a given tag
         * @param tag
         * @returns {function(ITile): (boolean|boolean)} A function that returns true if the tag is in the item, false if it is not
         */
        private evalForTag = (tag: string)  =>{
            return (item: ITile) => {
                if (item.tags.indexOf(tag) >= 0) {
                    return true;
                }
                return false;
            }
        }

        /**
         * Creates a new DataService
         */
        constructor ($http: ng.IHttpService, $q: ng.IQService, $state: ng.ui.IStateService) {
            this.$http = $http;
            this.$q = $q;
            this.$state = $state;
        }

        /**
         * Gets all events for the current user
         * @returns {ng.IPromise<ITile[]>}
         */
        public getTiles = ():ng.IPromise<ITile[]> => {
            var defered = this.$q.defer();
            this.$http.post("/api/tiles", {})
                .then(
                (response: ng.IHttpPromiseCallbackArg<any>) => {
                    // Success
                    if (response && response.data && response.data.tiles) {
                        defered.resolve(response.data.tiles);
                    }
                    defered.reject({
                        msg: response.data.msg
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

        public getTilesForFilter = (tag: string):ng.IPromise<ITile[]> => {
            var deferred = this.$q.defer();
            // Todo: this needs to be fixed
            this.getTiles().then(
                (tiles: ITile[]) => {
                    var tilesSubset = this.getSubsetWhere(tiles, this.evalForTag(tag));
                    deferred.resolve(tilesSubset)
                }, () => {
                    // Todo: handle error
                    deferred.reject();
            })
            return deferred.promise;
        }

        public executeTile = (tile: Tile.ITile) => {
            this.$state.go(tile.action.state, tile.action.stateParams);
        }
    }

    /**
     * Angular module and service registration
     */
    angular.module(TileService.moduleId, ["ngMockE2E"])
        .service(TileService.serviceId, TileService)
        .run(function($httpBackend:angular.IHttpBackendService) {
        // do not bother server, respond with given content
        $httpBackend.whenPOST('/api/tiles').respond(function (method:string, url:string, data:any, headers:any, params:any) {
            var tiles: ITile[] = [];
            tiles.push(
                {
                    text: "Events",
                    tags: [
                        "all",
                        ""
                    ],
                    textColor: "white",
                    background: "black",
                    action: {
                        state: "home",
                        stateParams: {
                            filter: "events"
                        }
                    }
                },
                {
                    text: "Participants",
                    tags: [
                        "all",
                        ""
                    ],
                    textColor: "white",
                    background: "black",
                    action: {
                        state: "home",
                        stateParams: {
                            filter: "participants"
                        }
                    }
                },
                {
                    text: "Create Participant",
                    tags: [
                        "all",
                        "create",
                        "participants"
                    ],
                    textColor: "white",
                    background: "black",
                    action: {
                        state: "home",
                        stateParams: {
                            filter: "routes"
                        }
                    }
                },
                {
                    text: "Edit Participant",
                    tags: [
                        "all",
                        "edit",
                        "participants"
                    ],
                    textColor: "white",
                    background: "black",
                    action: {
                        state: "home",
                        stateParams: {
                            filter: "routes"
                        }
                    }
                },
                {
                    text: "Delete Participant",
                    tags: [
                        "all",
                        "delete",
                        "participants"
                    ],
                    textColor: "white",
                    background: "black",
                    action: {
                        state: "home",
                        stateParams: {
                            filter: "routes"
                        }
                    }
                },
                {
                    text: "Add Participant to Team",
                    tags: [
                        "all",
                        "add",
                        "teams",
                        "participants"
                    ],
                    textColor: "white",
                    background: "black",
                    action: {
                        state: "home",
                        stateParams: {
                            filter: "routes"
                        }
                    }
                },
                {
                    text: "Remove Participant to Team",
                    tags: [
                        "all",
                        "remove",
                        "teams",
                        "participants"
                    ],
                    textColor: "white",
                    background: "black",
                    action: {
                        state: "home",
                        stateParams: {
                            filter: "routes"
                        }
                    }
                },
                {
                    text: "Routes",
                    tags: [
                        "all",
                        ""
                    ],
                    textColor: "white",
                    background: "black",
                    action: {
                        state: "home",
                        stateParams: {
                            filter: "routes"
                        }
                    }
                },
                {
                    text: "Create Route",
                    tags: [
                        "all",
                        "create",
                        "routes"
                    ],
                    textColor: "white",
                    background: "black",
                    action: {
                        state: "home",
                        stateParams: {
                            filter: "routes"
                        }
                    }
                },
                {
                    text: "Edit Route",
                    tags: [
                        "all",
                        "edit",
                        "routes"
                    ],
                    textColor: "white",
                    background: "black",
                    action: {
                        state: "home",
                        stateParams: {
                            filter: "routes"
                        }
                    }
                },
                {
                    text: "Delete Route",
                    tags: [
                        "all",
                        "delete",
                        "routes"
                    ],
                    textColor: "white",
                    background: "black",
                    action: {
                        state: "home",
                        stateParams: {
                            filter: "routes"
                        }
                    }
                },
                {
                    text: "Assign Team to Route",
                    tags: [
                        "all",
                        "assign",
                        "teams",
                        "routes"
                    ],
                    textColor: "white",
                    background: "black",
                    action: {
                        state: "home",
                        stateParams: {
                            filter: "routes"
                        }
                    }
                },
                {
                    text: "Teams",
                    tags: [
                        "all",
                        ""
                    ],
                    textColor: "white",
                    background: "black",
                    action: {
                        state: "home",
                        stateParams: {
                            filter: "teams"
                        }
                    }
                },
                {
                    text: "Info",
                    tags: [
                        "all",
                        ""
                    ],
                    textColor: "white",
                    background: "black",
                    action: {
                        state: "home",
                        stateParams: {
                            filter: "event"
                        }
                    }
                },
                {
                    text: "Chat",
                    tags: [
                        "all",
                        ""
                    ],
                    textColor: "white",
                    background: "black",
                    action: {
                        state: "home",
                        stateParams: {
                            filter: "chat"
                        }
                    }
                },
                {
                    text: "Administrators",
                    tags: [
                        "all",
                        ""
                    ],
                    textColor: "white",
                    background: "black",
                    action: {
                        state: "home",
                        stateParams: {
                            filter: "administrators"
                        }
                    }
                },
                {
                    text: "Buses",
                    tags: [
                        "all",
                        ""
                    ],
                    textColor: "white",
                    background: "black",
                    action: {
                        state: "home",
                        stateParams: {
                            filter: "buses"
                        }
                    }
                },
                {
                    text: "All",
                    tags: [
                        ""
                    ],
                    textColor: "white",
                    background: "black",
                    action: {
                        state: "home",
                        stateParams: {
                            filter: "all"
                        }
                    }
                });

            return [200, {tiles: tiles}];
        });
    });



}