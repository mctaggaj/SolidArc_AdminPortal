/// <reference path="../Typings/Typings.d.ts"/>

/**
 * The App module.
 * Contains all sub-modules and implementation required for the app
 */
module App {

    /**
     * An angular module
     */
    export interface IModule {
        /**
         * The name of the angular module
         */
        moduleId:string;

        /**
         * The base url for any templates
         */
        baseUrl?: string;
    }

    export var moduleId = "App";
    export var baseUrl = "/src/";

    /**
     * Gets the list of child module ids given a module
     * @param object the parent modules
     * @param <optional> the array of dependencies to add to
     * @returns module ids of child modules
     */
    export function getChildModuleIds(object: IModule, dep?: string[]):string[] {
        var dep: string[] = dep||[];
        for (var property in object) {
            if (object.hasOwnProperty(property)&&object[property].hasOwnProperty("moduleId")) {
                dep.push((<IModule>object[property]).moduleId)
            }
        }
        return dep
    }


    export class SubParameterController {

        public didUpdateParams:() => void;


        constructor ($scope: ng.IScope, protected $stateParams: any, $rootScope:ng.IRootScopeService, protected $state: ng.ui.IStateService, state: string) {

            var _this = this;
            var unsubscribe = $rootScope.$on('$stateChangeStart',
                function(event, toState, toParams, fromState, fromParams){

                    /*console.log(event, toState, toParams, fromState, fromParams);*/
                    if (fromState.name === toState.name && toState.name === state) {
                        event.preventDefault();
                        _this.$stateParams = toParams;
                        _this.didUpdateParams();
                        $state.go(toState.name, toParams, {location:true,notify:false})
                    }
                })
            $scope.$on('$destroy', function() {
                unsubscribe();
            });
        }
    }

    export interface IItem {
        id: string;
    }

    export interface IListDetailScope extends ng.IScope{
        list: IItem[];
        selected: IItem;
        select: (item: IItem) => void;
    }

    export interface IListDetailStateParams {
        selectedId: string;
    }

    export class ListDetailController<T extends IItem> extends SubParameterController{

        protected getList: () => ng.IPromise<IItem[]>;

        public select = (item: IItem) => {
            this.$state.go(this.state, {selectedId: item.id})
        }

        public didUpdateParams = () => {
            if (this.$scope.list && this.$scope.list.length) {
                if (this.$stateParams.selectedId !== undefined) {
                    for (var i = 0 ; i < this.$scope.list.length; i++) {
                        if (this.$scope.list[i].id === this.$stateParams.selectedId) {
                            this.$scope.selected = this.$scope.list[i];
                        }
                    }
                }
                else {
                    this.$state.go(this.state, {selectedId: this.$scope.list[0].id})
                }
            }
            else {
                this.getList().then((items: IItem[]) => {
                    this.$scope.list = items;
                    this.didUpdateParams();
                }, () => {
                    //todo: handle error
                })
            }
        };


        constructor (protected $scope: IListDetailScope , protected $stateParams: IListDetailStateParams, $rootScope:ng.IRootScopeService, protected $state: ng.ui.IStateService, private state: string) {
            super($scope, $stateParams, $rootScope, $state, state);
            this.$scope.select = this.select;
        }
    }

}