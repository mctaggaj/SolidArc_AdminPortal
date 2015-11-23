/// <reference path="AuthGlobals.ts" />

module App.Auth {

    /**
     * Ensures that only authenticated uses can access pages that require authentication
     */
    export class AuthRouter {
        public static moduleId = App.moduleId + "." + "RouteInterceptor";
    }

    /**
     * Angular module and service registration
     */
    angular.module(AuthRouter.moduleId, [AuthService.moduleId])
        .run(["$rootScope", "$state", AuthService.serviceId,function($rootScope:ng.IRootScopeService, $state: ng.ui.IStateService, authService: AuthService) {
            $rootScope.$on('$stateChangeStart',
                function(event, toState, toParams, fromState, fromParams){
                    if (toState.noEvent !== true && authService.hasSelectedEvent() !== true) {
                        event.preventDefault();
                        $state.go(SelectEvent.state);
                    }
                    if (toState.noAuth !== true && authService.isLoggedIn() !== true) {
                        event.preventDefault();
                        $state.go(Login.state);
                    }
                })
        }]);
}