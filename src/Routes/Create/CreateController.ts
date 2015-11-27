/// <reference path="CreateGlobals.ts" />
module App.Routes.Create {
    import IItem = SolidArc.IItem;

    interface IRoute extends IItem {

    }
    interface ICoords extends IItem {
      latitude : number;
      longitude : number;
    }

    interface ICreateControllerScope extends IListDetailScope{
        map: any;
        markers: any;
        path: ICoords[];
        route: any;
        geocoder: any;
        create: () => void;
        changeZoom: () => void;
        goToAddress: () => void;
        newroute: any;
        routeName: any;
        routePending: any;
        newmarker: any;
        nameAdded: any; //A flag that changes when the user enters a name for the route
        saveMarker: () => void;
        saveRoute: () => void;
        genPath: () => ICoords[];
        mapClick: (mapModel: any, eventName: any, originalEventArgs: any) => void;
    }

    export class CreateController extends App.ListDetailController<IRoute> {
        public static controllerId = "CreateController";
        public static moduleId = Create.moduleId + "." + CreateController.controllerId;

        public static $inject = ["$rootScope", "$scope", Data.DataService.serviceId, "uiGmapGoogleMapApi", "$state", "$stateParams"];

        constructor ($rootScope: any, $scope: ICreateControllerScope, dataService: Data.DataService, uiGmapGoogleMapApi: any, protected $state: ng.ui.IStateService, $stateParams: any) {
          super($scope, $stateParams, $rootScope, $state, state);
            $scope.routePending = false;
            $scope.changeZoom = () => {
              console.log("Gravy!");
            };
            $scope.nameAdded = false;
          $scope.routeName = "";
            uiGmapGoogleMapApi.then(function(maps) {
              $scope.geocoder = new maps.Geocoder();

              $scope.mapClick = (mapModel, eventName, originalEventArgs) => {
                var lat, lng;
                console.log(originalEventArgs[0]);
                lat = originalEventArgs[0].latLng.lat();
                lng = originalEventArgs[0].latLng.lng();
                $scope.$apply(function() {
                  $scope.newmarker.coords = {
                    latitude: lat,
                    longitude: lng
                  };
                  $scope.newmarker.pending = true;
                });
              };
              $scope.saveMarker = () => {
                console.log("Saving this marker!");
                $scope.newmarker.pending = false;
                var marker = {
                  id: "1",
                  coords: {},
                  options: {
                    title: ""
                  },
                  events: {}
                };
                marker.coords = {
                  latitude: $scope.newmarker.coords.latitude,
                  longitude: $scope.newmarker.coords.longitude
                };
                marker.options.title = marker.id;
                $scope.markers.push(marker);
                if ($scope.markers.length > 1 && $scope.routeName.length > 0) {
                  console.log($scope.routeName, "is the route");
                  $scope.routePending = true;
                }
                  $scope.map.center.address = "";
              };
              $scope.$watch("routeName", (newValue, oldValue) => {
                console.log(newValue);
                if (newValue.length > 2 && $scope.markers.length >= 2) {
                  $scope.routePending = true;
                }
              });
              $scope.saveRoute = () => {
                console.log("save route");
                var route = {
                  "id": "" + App.getNextId(),
                  "markers": []
                };
                for (var i = 0; i < $scope.markers.length; i++) {
                  route.markers.push($scope.markers[i]);
                }
                Routes.routes.push(route);
                $state.go('routes', { selectedId: route.id });
              };
              $scope.map = {
                center: {
                  latitude: 43.52937319999999,
                  longitude: -80.2252502
                },
                zoom: 15,
                zoom_options: (function(min,max){var a=[],i;for(i=min;i<max;i++){a.push(i);}return a;}(0,18)),
                events: {
                  "click": $scope.mapClick
                }
              };
              $scope.newroute = {
                name: "",
                points: [
                  
                ]
              };
              $scope.newmarker = {
                id: "-1",
                coords: {},
                options: {
                  opacity: 0.5
                },
                events: {},
                pending: false
              }
              var getNextId = (function() {
                var id = 1;
                return function() {
                  return id++;
                };
              }());
              $scope.markers = [];
              $scope.path = [];
              $scope.genPath = () => {
                while ($scope.path.length > 1) $scope.path.pop();
                if ($scope.markers.length > 1) {
                  for (var i = 0; i < $scope.markers.length; i++) {
                    var marker = $scope.markers[i];
                    while ($scope.path.length > 1) $scope.path.pop();
                    $scope.path.push(marker.coords);
                  }
                }
                return $scope.path;
              };
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
                      //If we don't wrap this in $scope.apply, it does not get updated right away
                      $scope.$apply(function(){
                        var lat, lng;
                        lat = results[0].geometry.location.lat();
                        lng = results[0].geometry.location.lng();
                        //$scope.map.center.latitude = lat;
                        //$scope.map.center.longitude = lng;
                        $scope.newmarker.coords = {
                          latitude: lat,
                          longitude: lng
                        };
                        $scope.newmarker.pending = true;
                      });
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
        .config(['uiGmapGoogleMapApiProvider', '$stateProvider', (GoogleMapApiProviders, $stateProvider: ng.ui.IStateProvider) => {
          GoogleMapApiProviders.configure({

          });
        }]);
}
