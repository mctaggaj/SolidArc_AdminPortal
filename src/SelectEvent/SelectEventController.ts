/// <reference path="SelectEventGlobals.ts" />
module App.SelectEvent {


    interface ISelectEventController extends ng.IScope{
        events: any[];
        selectedEvent: any;
        select: () => void
    }

    export class SelectEventController {
        public static controllerId = "SelectEvent";
        public static moduleId = SelectEvent.moduleId + "." + SelectEventController.controllerId;
        public static $inject = ["$scope", "$state", Data.DataService.serviceId];

        private dataService: Data.DataService;
        private $state: ng.ui.IStateService;
        private scope;

        constructor ($scope: ISelectEventController, $state: ng.ui.IStateService, dataService: Data.DataService) {
            this.dataService = dataService;
            this.$state = $state;
            this.scope = $scope
            this.scope.select = () => {
                console.log(this.scope.selectedEvent);
                if (this.scope.selectedEvent) {
                    this.$state.go(Home.state);
                }

            }
            dataService.getEvents().then((response : Data.IEventsResponse) => {
                // Success
                this.scope.events = response.data.events;

            }, (response : SolidArc.IResponse) => {

            })
        }

    }


    // Angular module and controller registration
    angular.module(SelectEventController.moduleId, [Data.DataService.moduleId]).
        controller(SelectEventController.controllerId, SelectEventController)
        .config(["$stateProvider", ($routeProvider: ng.ui.IStateProvider) => {
            $routeProvider.state(SelectEvent.state, {
                templateUrl: SelectEvent.baseUrl+'select_event.html',
                controller: SelectEventController.controllerId,
                url: "/selectEvent"
            })
        }]);
}