/// <reference path="TileGlobals.ts" />

module App.Tile {

    export var mockData: ITile[] = [
        {
            text: "Events",
            tags: [
                "all",
                ""
            ],
            textColor: "#333",
            background: "#fea101",
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
            textColor: "#333",
            background: "#fea101",
            action: {
                state: "",
                stateParams: {
                }
            }
        },
        {
            text: "View Event",
            tags: [
                "all",
                "view",
                "events"
            ],
            textColor: "#333",
            background: "#fea101",
            action: {
                state: "",
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
            textColor: "#333",
            background: "#fea101",
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
            textColor: "#333",
            background: "#fea101",
            action: {
                state: "",
                stateParams: {
                    filter: "events"
                }
            }
        },
        {
            text: "Select Event",
            tags: [
                "all",
                "events"
            ],
            textColor: "#333",
            background: "#fea101",
            action: {
                state: "selectEvent",
                stateParams: {
                }
            }
        },
        {
            text: "Participants",
            tags: [
                "all",
                ""
            ],
            textColor: "#333",
            background: "#fea101",
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
            textColor: "#333",
            background: "#fea101",
            action: {
                state: "createParticipant",
                stateParams: {
                }
            }
        },
        {
            text: "View Participant",
            tags: [
                "all",
                "view",
                "participants"
            ],
            textColor: "#333",
            background: "#fea101",
            action: {
                state: "participant",
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
            textColor: "#333",
            background: "#fea101",
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
            textColor: "#333",
            background: "#fea101",
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
            textColor: "#333",
            background: "#fea101",
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
            textColor: "#333",
            background: "#fea101",
            action: {
                state: "createRoute",
                stateParams: {
                }
            }
        },
        {
            text: "View Route",
            tags: [
                "all",
                "view",
                "routes"
            ],
            textColor: "#333",
            background: "#fea101",
            action: {
                state: "routes",
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
            textColor: "#333",
            background: "#fea101",
            action: {
                state: "routes",
                stateParams: {
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
            textColor: "#333",
            background: "#fea101",
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
            textColor: "#333",
            background: "#fea101",
            action: {
                state: "home",
                stateParams: {
                    filter: "teams"
                }
            }
        },
        {
            text: "Create Team",
            tags: [
                "all",
                "create",
                "teams"
            ],
            textColor: "#333",
            background: "#fea101",
            action: {
                state: "createTeam",
                stateParams: {
                }
            }
        },
        {
            text: "View Team",
            tags: [
                "all",
                "view",
                "teams"
            ],
            textColor: "#333",
            background: "#fea101",
            action: {
                state: "teams",
                stateParams: {
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
            textColor: "#333",
            background: "#fea101",
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
            textColor: "#333",
            background: "#fea101",
            action: {
                state: "teams",
                stateParams: {
                }
            }
        },
        {
            text: "Add/Remove Participant on Team",
            tags: [
                "all",
                "add",
                "remove",
                "teams",
                "participants"
            ],
            textColor: "#333",
            background: "#fea101",
            action: {
                state: "teams",
                stateParams: {
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
            textColor: "#333",
            background: "#fea101",
            action: {
                state: "",
                stateParams: {
                    filter: ""
                }
            }
        },
        {
            text: "Info",
            tags: [
                "all",
                ""
            ],
            textColor: "#333",
            background: "#fea101",
            action: {
                state: "home",
                stateParams: {
                    filter: "info"
                }
            }
        },
        {
            text: "Chat",
            tags: [
                "all",
                ""
            ],
            textColor: "#333",
            background: "#fea101",
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
            textColor: "#333",
            background: "#fea101",
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
            textColor: "#333",
            background: "#fea101",
            action: {
                state: "createAdministrator",
                stateParams: {
                }
            }
        },
        {
            text: "View Administrator",
            tags: [
                "all",
                "view",
                "administrators"
            ],
            textColor: "#333",
            background: "#fea101",
            action: {
                state: "administrator",
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
            textColor: "#333",
            background: "#fea101",
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
            textColor: "#333",
            background: "#fea101",
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
            textColor: "#333",
            background: "#fea101",
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
            textColor: "#333",
            background: "#fea101",
            action: {
                state: "home",
                stateParams: {
                    filter: "all"
                }
            }
        },
        {
            text: "Home",
            tags: [
                "all"
            ],
            textColor: "#333",
            background: "#fea101",
            action: {
                state: "home",
                stateParams: {
                    filter: ""
                }
            }
        }

    ];
}
