/// <reference path="CreateGlobals.ts" />
module App.Routes.Create {

    interface ICreateControllerScope extends ng.IScope{
        map: any;
        markers: any;
        route: any;
        create: () => void;
    }

    export class CreateController {
        public static controllerId = "CreateController";
        public static moduleId = Create.moduleId + "." + CreateController.controllerId;

        public static $inject = ["$scope", Data.DataService.serviceId];

        constructor (private $scope: ICreateControllerScope, dataService: Data.DataService) {
            this.$scope = $scope;

            $scope.map = {
              center: {
                latitude: 45,
                longitude: -73
              },
              zoom: 8
            };
            $scope.markers = [
              {
                id: "1",
                coords: {
                  latitude: 45,
                  longitude: -73
                },
                options: {

                },
                events: {

                }
              },
              {
                id: "2",
                coords: {
                  latitude: 45.3,
                  longitude: -73
                },
                options: {

                },
                events: {

                }
              },
              {
                id: "3",
                coords: {
                  latitude: 45,
                  longitude: -73.3
                },
                options: {

                },
                events: {

                }
              }
            ];

        }
    }

    // Angular module and controller registration
    angular.module(CreateController.moduleId, [Data.moduleId, 'uiGmapgoogle-maps']).
        controller(CreateController.controllerId, CreateController)
        .config(["$stateProvider", ($stateProvider: ng.ui.IStateProvider) => {
            $stateProvider.state(Create.state, {
                templateUrl: Create.baseUrl+'create.html',
                controller: CreateController.controllerId,
                url: "/routes/create"
            })
        }])
        .config(['uiGmapGoogleMapApiProvider', (GoogleMapApiProviders) => {
          GoogleMapApiProviders.configure({

          });
        }]);
}
