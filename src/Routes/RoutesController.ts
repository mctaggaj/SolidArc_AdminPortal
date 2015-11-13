/// <reference path="RoutesGlobals.ts" />
module App.Routes {

    interface IRoutesControllerScope extends ng.IScope{
      list: any;
      map: any;
    }

    interface IRoutesStateParams {
    }

    export class RoutesController extends App.ListDetailController<any> {
        public static controllerId = "RoutesController";
        public static moduleId = Routes.moduleId + "." + RoutesController.controllerId;

        public static $inject = ["$rootScope", "$state", "$scope", "uiGmapGoogleMapApi", "$stateParams"];
        constructor ($rootScope: any, $state: any, private $scope: IRoutesControllerScope, uiGmapGoogleMapApi: any, $stateParams: IRoutesStateParams) {
          super($scope, $stateParams, $rootScope, $state, state);
            this.$scope = $scope;
            $scope.list = Routes.routes;
            uiGmapGoogleMapApi.then(function(maps) {
              $scope.map = {
                center: {
                  latitude: 43.52937319999999,
                  longitude: -80.2252502
                },
                zoom: 15,
                zoom_options: (function(min,max){var a=[],i;for(i=min;i<max;i++){a.push(i);}return a;}(0,18)),
                events: {
                }
              };
            });
        }
    }

    // Angular module and controller registration
    angular.module(RoutesController.moduleId, []).
        controller(RoutesController.controllerId, RoutesController)
        .config(["$stateProvider", ($stateProvider: ng.ui.IStateProvider) => {
            $stateProvider.state(Routes.state, {
                templateUrl: Routes.baseUrl+'routes.html',
                controller: RoutesController.controllerId,
                url: "/routes?selectedId"
            })
        }])
        .config(['uiGmapGoogleMapApiProvider', (GoogleMapApiProviders) => {
          GoogleMapApiProviders.configure({

          });
        }]);
}

