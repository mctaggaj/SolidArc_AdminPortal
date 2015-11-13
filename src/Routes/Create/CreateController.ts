/// <reference path="CreateGlobals.ts" />
module App.Routes.Create {

    interface ICreateControllerScope extends ng.IScope{
        map: any;
        markers: any;
        route: any;
        geocoder: any;
        create: () => void;
        changeZoom: () => void;
        goToAddress: () => void;
    }

    export class CreateController {
        public static controllerId = "CreateController";
        public static moduleId = Create.moduleId + "." + CreateController.controllerId;

        public static $inject = ["$scope", Data.DataService.serviceId, "uiGmapGoogleMapApi"];

        constructor (private $scope: ICreateControllerScope, dataService: Data.DataService, uiGmapGoogleMapApi: any) {
            this.$scope = $scope;
            $scope.changeZoom = () => {
              console.log("Gravy!");
            };
            
            uiGmapGoogleMapApi.then(function(maps) {
              $scope.geocoder = new maps.Geocoder();
              $scope.map = {
                center: {
                  latitude: 45,
                  longitude: -73
                },
                zoom: 8,
                zoom_options: [1, 2, 3, 4, 5, 6, 7, 8]
              };
              $scope.markers = [
                {
                  id: getNextId()+"",
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
                  id: getNextId()+"",
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
                  id: getNextId()+"",
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
              
              $scope.goToAddress = () => {
                if ($scope.map.center.address !== "") {
                  var searching = true;
                  console.log("Searching...");
                  $scope.geocoder.geocode({
                    address: $scope.map.center.address
                  }, function(results, status) {
                    searching = false;
                    console.log("Found!");
                    console.log(results, status);
                    if (status == maps.GeocoderStatus.OK) {
                      var lat, lng;
                      lat = results[0].geometry.location.lat();
                      lng = results[0].geometry.location.lng();
                      console.log(lat, lng);
                      $scope.map.center.latitude = lat;
                      $scope.map.center.longitude = lng;
                    }
                  });
                }
              };
            });
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
