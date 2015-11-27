/// <reference path="../AppGlobals.ts" />
module App.Routes {

    export var moduleId = App.moduleId + ".Routes";
    export var baseUrl = App.baseUrl + "Routes/";

    export var state = "routes"
    export var routes:any[] = [
                        {
                          event_id: 1,
                          event_name: "Guelph 2016",
                          route_id: "1",
                          route_name: "Stone Rd",
                          waypoints: [
                            {
                              waypoint_id: 1,
                              coords: {
                                "latitude":43.53466420647699,
                                "longitude":-80.23645877772651
                              }
                            },
                            {
                              waypoint_id: 2,
                              coords: {
                                "latitude":43.53196307514512,
                                "longitude":-80.24006366664253
                              }
                            }
                          ]
                        },
                        {
                          event_id: 1,
                          event_name: "Guelph 2016",
                          route_id: "2",
                          route_name: "Mayfield Ave",
                          waypoints: [
                            {
                              waypoint_id: 1,
                              coords: {
                                "latitude":43.52785033458121,
                                "longitude":-80.22315502166748
                              }
                            },
                            {
                              waypoint_id: 2,
                              coords: {
                                "latitude":43.52636243799722,
                                "longitude":-80.22088050842285
                              }
                            },
                            {
                              waypoint_id: 3,
                              coords: {
                                "latitude":43.52695929829636,
                                "longitude":-80.22006511688232
                              }
                            },
                            {
                              waypoint_id: 4,
                              coords: {
                                "latitude":43.52783619136309,
                                "longitude":-80.221266746521
                              }
                            }
                          ]
                        },
                        {
                          event_id: 1,
                          event_name: "Guelph 2016",
                          route_id: "3",
                          route_name: "Bone Rd",
                          waypoints: [
                            {
                              waypoint_id: 1,
                              coords: {
                                latitude: 1,
                                longitude: 1
                              }
                            },
                            {
                              waypoint_id: 2,
                              coords: {
                                latitude: 1.1,
                                longitude: 1
                              }
                            }
                          ]
                        }
                      ];
    export var map = {};
}
