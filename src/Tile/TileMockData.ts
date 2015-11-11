/// <reference path="TileGlobals.ts" />

module App.Tile {

    export var mockData: ITile[] = [
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
            text: "Create Event",
            tags: [
                "all",
                "create",
                "events"
            ],
            textColor: "white",
            background: "black",
            action: {
                state: "",
                stateParams: {
                }
            }
        },
        {
            text: "Select Event",
            tags: [
                "all",
                "events"
            ],
            textColor: "white",
            background: "black",
            action: {
                state: "selectEvent",
                stateParams: {
                }
            }
        },
        {
            text: "Edit Event",
            tags: [
                "all",
                "edit",
                "events"
            ],
            textColor: "white",
            background: "black",
            action: {
                state: "",
                stateParams: {
                }
            }
        },
        {
            text: "Delete Event",
            tags: [
                "all",
                "delete",
                "events"
            ],
            textColor: "white",
            background: "black",
            action: {
                state: "",
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
                state: "createParticipant",
                stateParams: {
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
                state: "participant",
                stateParams: {
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
                state: "participant",
                stateParams: {
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
                state: "participant",
                stateParams: {
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
                state: "participant",
                stateParams: {
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
                state: "createRoute",
                stateParams: {
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
            text: "Edit Team",
            tags: [
                "all",
                "edit",
                "teams"
            ],
            textColor: "white",
            background: "black",
            action: {
                state: "teams",
                stateParams: {
                }
            }
        },
        {
            text: "Delete Team",
            tags: [
                "all",
                "delete",
                "teams"
            ],
            textColor: "white",
            background: "black",
            action: {
                state: "teams",
                stateParams: {
                }
            }
        },
        {
            text: "Create Team",
            tags: [
                "all",
                "delete",
                "teams"
            ],
            textColor: "white",
            background: "black",
            action: {
                state: "teams",
                stateParams: {
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
            text: "Create Administrator",
            tags: [
                "all",
                "create",
                "administrators"
            ],
            textColor: "white",
            background: "black",
            action: {
                state: "createAdministrator",
                stateParams: {
                }
            }
        },
        {
            text: "Edit Administrator",
            tags: [
                "all",
                "edit",
                "administrators"
            ],
            textColor: "white",
            background: "black",
            action: {
                state: "administrator",
                stateParams: {
                }
            }
        },
        {
            text: "Delete Administrator",
            tags: [
                "all",
                "delete",
                "administrators"
            ],
            textColor: "white",
            background: "black",
            action: {
                state: "administrator",
                stateParams: {
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
        }

    ];
}
