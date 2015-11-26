/// <reference path="FarmToForkGlobals.ts" />
module App.FarmToFork {

    /**
     * Gets data from the api
     */
    export class FarmToForkService {
        public static serviceId = "FarmToForkService";
        public static moduleId = App.moduleId + "." + FarmToForkService.serviceId;
        public static $inject: string[] = ["$http", "$q"];


        /**
         * The http service
         */
        private $http: ng.IHttpService;

        /**
         * The promise service
         */
        private $q: ng.IQService;

        /**
         * Creates a new FarmToForkService
         */
        constructor ($http: ng.IHttpService, $q: ng.IQService) {
            this.$http = $http;
            this.$q = $q;
        }


        public getNeeds = ():ng.IPromise<any> => {
            var defered = this.$q.defer();
            this.$http.get("http://131.104.49.228/api/1.0/needs")
            //this.$http.get("http://131.104.49.228/api/1.0/needs", {})
                .then(
                    (response: ng.IHttpPromiseCallbackArg<any>)=>{
                        defered.resolve(response.data)
                    },
                    (response: ng.IHttpPromiseCallbackArg<any>) => {
                        // Failure
                        defered.reject({
                            msg: response.data.msg
                        });
                    });
            return defered.promise;
        }

    }

    /**
     * Angular module and service registration
     */
    angular.module(FarmToForkService.moduleId, ["ngMockE2E"])
        .service(FarmToForkService.serviceId, FarmToForkService)
        .run(["$httpBackend", ($httpBackend:angular.IHttpBackendService) => {
            $httpBackend.whenGET("http://131.104.49.228/api/1.0/needs").respond(() => {
                return [200, [{"need_id":"0","quantity":"0","units":"units","date":"2013-04-22 01:23:47","pantry_id":"1","user_id":"1","item_title":"Empty Totes","description":"For produce storage","category":"Storage","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"4","quantity":"0","units":"KG","date":"2013-06-27 14:14:56","pantry_id":"2","user_id":"0","item_title":"Peanut butter","description":"Crunchy or smooth","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"6","quantity":"0","units":"Kilograms","date":"0000-00-00 00:00:00","pantry_id":"2","user_id":"1","item_title":"Baby Food","description":"Formula or puree","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"7","quantity":"0","units":"Bushels","date":"0000-00-00 00:00:00","pantry_id":"2","user_id":"1","item_title":"Apples","description":"Any Variety","category":"Fruit","is_perishable":"1","is_refrigerated":"0","need_type":"0"},{"need_id":"8","quantity":"30","units":"dozen cartons","date":"2013-07-30 12:54:21","pantry_id":"2","user_id":"1","item_title":"Eggs","description":"","category":"Eggs and meat","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"9","quantity":"0","units":"pounds","date":"0000-00-00 00:00:00","pantry_id":"1","user_id":"1","item_title":"Apples","description":"Washed","category":"Fruits and Veg","is_perishable":"1","is_refrigerated":"0","need_type":"0"},{"need_id":"10","quantity":"0","units":"unit","date":"2013-04-22 01:23:49","pantry_id":"1","user_id":"1","item_title":"Large Chest Freezer","description":"Working conditon preferably clean","category":"Utilities","is_perishable":"0","is_refrigerated":"1","need_type":"0"},{"need_id":"11","quantity":"0","units":"kg","date":"2013-04-10 22:18:52","pantry_id":"1","user_id":"1","item_title":"apples","description":"fruits","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"12","quantity":"0","units":"Tons","date":"2013-04-10 22:18:43","pantry_id":"1","user_id":"1","item_title":"Oranges","description":"Peeled","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"13","quantity":"0","units":"kiloton","date":"2013-04-10 23:29:26","pantry_id":"7","user_id":"1","item_title":"Watermelon","description":"Must be seedless","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"14","quantity":"0","units":"Bags","date":"2013-04-22 01:23:50","pantry_id":"1","user_id":"1","item_title":"Apples","description":"Any kind","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"15","quantity":"0","units":"KG","date":"2013-04-22 01:23:52","pantry_id":"1","user_id":"1","item_title":"Garden Vegetables","description":"Assorted","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"16","quantity":"0","units":"KG","date":"2013-04-22 01:23:58","pantry_id":"1","user_id":"1","item_title":"Peanut Butter","description":"Crunchy or smooth","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"17","quantity":"0","units":"heads","date":"2013-04-11 14:51:17","pantry_id":"1","user_id":"723","item_title":"Lettuce","description":"fresh","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"18","quantity":"0","units":"KGS","date":"2013-06-11 09:18:12","pantry_id":"1","user_id":"723","item_title":"Cucumber","description":"Washed","category":"","is_perishable":"1","is_refrigerated":"0","need_type":"0"},{"need_id":"19","quantity":"0","units":"boxes","date":"2013-06-27 14:41:18","pantry_id":"1","user_id":"1","item_title":"Cereal","description":"Cinnamon Toast Crunch","category":"","is_perishable":"1","is_refrigerated":"0","need_type":"0"},{"need_id":"20","quantity":"0","units":"Cases","date":"2013-06-27 14:41:21","pantry_id":"1","user_id":"1","item_title":"Power Thirst","description":"Shockolate is preferred","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"21","quantity":"0","units":"apples","date":"2013-06-26 17:37:23","pantry_id":"2","user_id":"719","item_title":"apples","description":"fruit","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"22","quantity":"-20","units":" jars","date":"2013-07-30 12:57:44","pantry_id":"2","user_id":"1","item_title":"Peanut butter","description":"all natural is preferred, 500g jars","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"24","quantity":"0","units":"Bags","date":"2013-07-23 16:54:38","pantry_id":"1","user_id":"723","item_title":"Apples","description":"Polished","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"25","quantity":"0","units":"bacons","date":"2013-07-17 15:05:18","pantry_id":"1","user_id":"719","item_title":"bacon","description":"all the bacon","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"26","quantity":"0","units":"Pigs","date":"2013-07-24 12:49:17","pantry_id":"1","user_id":"719","item_title":"Bacon","description":"mmmmm","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"27","quantity":"0","units":"hats","date":"2013-07-23 20:25:16","pantry_id":"1","user_id":"719","item_title":"Stuff","description":"more stuff","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"28","quantity":"0","units":"units","date":"2013-07-23 16:54:51","pantry_id":"1","user_id":"719","item_title":"food","description":"edible preferably","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"29","quantity":"0","units":"2","date":"2013-07-23 16:55:54","pantry_id":"1","user_id":"719","item_title":"test","description":"test","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"30","quantity":"0","units":"Dalmations","date":"2013-07-23 20:18:51","pantry_id":"1","user_id":"816","item_title":"Corn Dogs","description":"A delectable treat of mystery meat goodness w","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"31","quantity":"0","units":"kg","date":"2013-07-23 20:20:12","pantry_id":"1","user_id":"816","item_title":"stuff .................................","description":"n' things","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"32","quantity":"2","units":"bushels","date":"2013-07-30 12:55:20","pantry_id":"2","user_id":"823","item_title":"Apples","description":"variety that does not easily bruise perferred","category":"","is_perishable":"1","is_refrigerated":"0","need_type":"0"},{"need_id":"33","quantity":"2","units":"cases","date":"2013-07-30 12:55:41","pantry_id":"2","user_id":"823","item_title":"Oranges","description":"","category":"","is_perishable":"1","is_refrigerated":"0","need_type":"0"},{"need_id":"34","quantity":"50","units":"lbs.","date":"2013-07-30 12:55:56","pantry_id":"2","user_id":"823","item_title":"Onions","description":"","category":"","is_perishable":"1","is_refrigerated":"0","need_type":"0"},{"need_id":"35","quantity":"50","units":"lbs.","date":"2013-07-30 12:56:08","pantry_id":"2","user_id":"823","item_title":"Carrots","description":"","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"36","quantity":"70","units":"lbs.","date":"2013-07-30 12:56:21","pantry_id":"2","user_id":"823","item_title":"Potatoes","description":"","category":"","is_perishable":"1","is_refrigerated":"0","need_type":"0"},{"need_id":"37","quantity":"2","units":"cases","date":"2013-07-30 12:56:52","pantry_id":"2","user_id":"823","item_title":"Bananas","description":"slightly green preferred.","category":"","is_perishable":"1","is_refrigerated":"0","need_type":"0"},{"need_id":"38","quantity":"0","units":"cans","date":"2013-07-30 12:41:00","pantry_id":"2","user_id":"823","item_title":"Mushroom Soup","description":"Required by Wednesday am of each week","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"39","quantity":"0","units":"cans","date":"2013-07-30 12:23:48","pantry_id":"2","user_id":"823","item_title":"Chicken Noodle Soup","description":"Required by Wednesday am of each week","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"40","quantity":"0","units":"cans","date":"2013-07-30 12:40:47","pantry_id":"2","user_id":"823","item_title":"Vegetable Soup","description":"Required by Wednesday am of each week","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"41","quantity":"0","units":"cans","date":"2013-07-30 12:40:55","pantry_id":"2","user_id":"823","item_title":"Tomato Soup","description":"Required by Wednesday am of each week","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"42","quantity":"120","units":"cans","date":"2013-07-30 12:46:48","pantry_id":"2","user_id":"823","item_title":"Soup","description":"mushroom, tomato, vegetable, chicken noodle","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"43","quantity":"48","units":"cans","date":"2013-07-30 12:57:20","pantry_id":"2","user_id":"823","item_title":" Kidney Beans","description":"black or red","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"44","quantity":"48","units":"cans","date":"2013-07-30 12:58:14","pantry_id":"2","user_id":"823","item_title":"Chick Peas","description":"","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"45","quantity":"0","units":"cans","date":"2013-07-30 12:42:18","pantry_id":"2","user_id":"823","item_title":"Green Beans","description":"Required by Wednesday am of each week","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"46","quantity":"120","units":"cans","date":"2013-07-30 12:44:00","pantry_id":"2","user_id":"823","item_title":"Vegetables","description":"peas, green beans, niblet corn and mixed ","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"47","quantity":"0","units":"cans","date":"2013-07-30 12:42:09","pantry_id":"2","user_id":"823","item_title":"Mixed Vegetables","description":"Required by Wednesday am of each week","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"48","quantity":"0","units":"cans","date":"2013-07-30 12:42:02","pantry_id":"2","user_id":"823","item_title":"Niblet Corn","description":"Required by Wednesday am of each week","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"49","quantity":"48","units":"cans","date":"2013-07-30 12:58:32","pantry_id":"2","user_id":"823","item_title":"Tuna","description":"","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"50","quantity":"48","units":"cans","date":"2013-07-30 12:58:47","pantry_id":"2","user_id":"823","item_title":"Salmon","description":"","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"51","quantity":"48","units":"cans","date":"2013-07-30 12:59:16","pantry_id":"2","user_id":"823","item_title":"Tomatoes","description":"low sodium preferred.","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"52","quantity":"48","units":"cans","date":"2013-07-30 12:59:30","pantry_id":"2","user_id":"823","item_title":"Pasta Sauce","description":"","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"53","quantity":"50","units":"bags","date":"2013-07-30 13:00:07","pantry_id":"2","user_id":"823","item_title":"Pasta","description":"900g bags of spaghetti, macaroni, penne, etc.","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"54","quantity":"12","units":"boxes","date":"2013-07-30 13:00:32","pantry_id":"2","user_id":"823","item_title":"Instant Oatmeal","description":"","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"55","quantity":"24","units":" large boxes","date":"2013-07-30 12:51:25","pantry_id":"2","user_id":"823","item_title":"Cereal","description":"Raisin Bran, Corn Flakes, Shreddies, Granola","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"56","quantity":"2","units":"X 8 kg","date":"2013-07-31 16:52:54","pantry_id":"2","user_id":"823","item_title":"Rice","description":"Brown or White","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"57","quantity":"4","units":"X 2.5 kg","date":"2013-07-31 16:53:30","pantry_id":"2","user_id":"823","item_title":"Milk Powder","description":"","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"58","quantity":"0","units":"","date":"2013-07-30 13:31:16","pantry_id":"19","user_id":"827","item_title":"Test Need","description":"","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"59","quantity":"12","units":"","date":"2013-07-30 14:09:49","pantry_id":"19","user_id":"827","item_title":"Pineapple","description":"Fruit","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"60","quantity":"50","units":"cans","date":"2013-08-02 13:26:55","pantry_id":"16","user_id":"828","item_title":"Tuna","description":"canned meat","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"61","quantity":"20","units":"boxes","date":"2013-08-13 16:54:12","pantry_id":"38","user_id":"833","item_title":"All Bran Bars ","description":"Kelloggs","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"62","quantity":"30","units":"boxes","date":"2013-08-08 15:41:42","pantry_id":"38","user_id":"833","item_title":"Cereal ","description":"Nut free, low fat ","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"63","quantity":"45","units":"cans ","date":"2013-08-27 17:00:00","pantry_id":"38","user_id":"833","item_title":"diced fruit","description":"ie. apple sauce, pears, mixed fruit. Not pack","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"64","quantity":"0","units":"cans","date":"2013-09-27 15:43:35","pantry_id":"1","user_id":"719","item_title":"Canned Fruit","description":"Fruit cocktail, peaches or pears","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"65","quantity":"10","units":"Bags","date":"2013-08-02 13:24:29","pantry_id":"16","user_id":"828","item_title":"oranges","description":"Fruit","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"66","quantity":"10","units":"bags","date":"2013-08-02 13:25:58","pantry_id":"16","user_id":"828","item_title":"carrots","description":"vegetable","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"67","quantity":"50","units":"cans","date":"2013-08-02 13:27:28","pantry_id":"16","user_id":"828","item_title":"Salmon","description":"canned meat","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"68","quantity":"50","units":"Cans","date":"2013-08-02 13:30:15","pantry_id":"16","user_id":"828","item_title":"Kidney Beans","description":"","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"69","quantity":"20","units":"Jars","date":"2013-08-02 13:31:37","pantry_id":"16","user_id":"828","item_title":"Peanut Butter","description":"","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"70","quantity":"50","units":"boxes","date":"2013-08-02 13:33:11","pantry_id":"16","user_id":"828","item_title":"Kraft Dinner","description":"pasta","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"71","quantity":"15","units":"boxes","date":"2013-08-27 17:00:20","pantry_id":"38","user_id":"833","item_title":"Kashi Granola Bars","description":"Nut Free","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"72","quantity":"0","units":"lbs daily","date":"2013-08-15 15:43:08","pantry_id":"10","user_id":"843","item_title":"Carrots","description":"Fresh","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"73","quantity":"75","units":"lbs daily","date":"2013-08-15 15:43:58","pantry_id":"10","user_id":"843","item_title":"Carrots","description":"Fresh","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"74","quantity":"75","units":"lbs daily","date":"2013-08-16 07:32:33","pantry_id":"10","user_id":"843","item_title":"Onions","description":"","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"75","quantity":"150","units":"lbs daily","date":"2013-08-16 07:34:00","pantry_id":"10","user_id":"843","item_title":"Apples","description":"","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"76","quantity":"375","units":"lbs daily","date":"2013-08-16 07:36:06","pantry_id":"10","user_id":"843","item_title":"Potatoes","description":"","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"77","quantity":"75","units":"Cartons daily","date":"2013-08-16 07:37:05","pantry_id":"10","user_id":"843","item_title":"Eggs","description":"White or Brown","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"78","quantity":"75","units":"Bricks daily","date":"2013-08-16 07:38:05","pantry_id":"10","user_id":"843","item_title":"Cheese","description":"Fresh","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"79","quantity":"0","units":"lbs daily","date":"2013-08-16 08:05:01","pantry_id":"10","user_id":"843","item_title":"Margerine or Butter","description":"","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"80","quantity":"0","units":"Cans daily","date":"2013-08-16 07:57:39","pantry_id":"10","user_id":"843","item_title":"Canned Tuna","description":"","category":"","is_perishable":"0","is_refrigerated":"1","need_type":"0"},{"need_id":"81","quantity":"0","units":"Cans daily","date":"2013-08-16 07:57:34","pantry_id":"10","user_id":"843","item_title":"Canned Salmon","description":"","category":"","is_perishable":"0","is_refrigerated":"1","need_type":"0"},{"need_id":"82","quantity":"0","units":"Cans daily","date":"2013-08-16 07:57:27","pantry_id":"10","user_id":"843","item_title":"Canned Turkey\/Chicken\/Ham","description":"","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"83","quantity":"0","units":"Cans daily","date":"2013-08-16 07:58:44","pantry_id":"10","user_id":"843","item_title":"Tuna","description":"Canned","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"84","quantity":"225","units":"Cans daily","date":"2013-08-16 07:59:24","pantry_id":"10","user_id":"843","item_title":"Tuna","description":"Canned","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"85","quantity":"225","units":"Cans daily","date":"2013-08-16 07:59:56","pantry_id":"10","user_id":"843","item_title":"Salmon","description":"Canned","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"86","quantity":"0","units":"Cans daily","date":"2013-08-16 08:00:48","pantry_id":"10","user_id":"843","item_title":"Ham\/Turkey\/Chicked","description":"Canned","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"87","quantity":"225","units":"Cans daily","date":"2013-08-16 08:01:25","pantry_id":"10","user_id":"843","item_title":"Ham\/Turkey\/Chicken","description":"","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"88","quantity":"1500","units":"lbs daily","date":"2013-08-16 08:45:34","pantry_id":"10","user_id":"843","item_title":"Meat and Protein Products","description":"Frozen or Fresh assorted","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"89","quantity":"0","units":"Cans daily","date":"2013-08-16 08:48:46","pantry_id":"10","user_id":"843","item_title":"Canned Fruits","description":"","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"90","quantity":"0","units":"Cans daily","date":"2013-08-16 14:23:43","pantry_id":"10","user_id":"843","item_title":"Canned Vegetables","description":"","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"91","quantity":"0","units":"Boxes daily","date":"2013-08-16 14:20:52","pantry_id":"10","user_id":"843","item_title":"Hot and Cold Cereals","description":"","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"92","quantity":"300","units":"Cans daily","date":"2013-08-16 08:53:50","pantry_id":"10","user_id":"843","item_title":"Canned Fruits","description":"","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"93","quantity":"300","units":"Cans daily","date":"2013-08-16 14:35:24","pantry_id":"10","user_id":"843","item_title":"Canned Vegetables","description":"Green, Yellow, Mixed","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"94","quantity":"0","units":"Canned","date":"2013-08-21 11:12:16","pantry_id":"1","user_id":"844","item_title":"Corn","description":"","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"95","quantity":"0","units":"","date":"2013-08-21 11:13:58","pantry_id":"1","user_id":"844","item_title":"Corn","description":"","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"96","quantity":"0","units":"Cans","date":"2013-09-14 15:38:54","pantry_id":"1","user_id":"844","item_title":"Corn","description":"","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"97","quantity":"20","units":"Boxes ","date":"2013-08-22 08:23:49","pantry_id":"38","user_id":"833","item_title":"Nut Free Cheerios ","description":"","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"98","quantity":"0","units":"500g","date":"2013-08-22 09:47:01","pantry_id":"1","user_id":"844","item_title":"Canned Fruit","description":"Fruit cocktail, peaches or pears","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"99","quantity":"0","units":"kg","date":"2013-08-22 14:27:36","pantry_id":"19","user_id":"827","item_title":"Apples","description":"","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"100","quantity":"0","units":"Dozen","date":"2013-09-10 18:50:15","pantry_id":"19","user_id":"1","item_title":"Apples","description":"","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"101","quantity":"-4043","units":"cans","date":"2013-11-13 20:42:37","pantry_id":"1","user_id":"719","item_title":"Canned Fruit","description":"Cans of Fruit","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"102","quantity":"0","units":"1","date":"2013-09-29 19:04:30","pantry_id":"1","user_id":"1","item_title":"test","description":"test","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"103","quantity":"0","units":"Cans","date":"2013-11-13 18:02:18","pantry_id":"1","user_id":"1","item_title":"Powerthirst","description":"Manana","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"104","quantity":"0","units":"boxes","date":"2013-11-13 20:00:32","pantry_id":"1","user_id":"1","item_title":"Cerealz","description":"Healthy not candy Cereals","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"105","quantity":"0","units":"asa","date":"2013-11-13 17:51:57","pantry_id":"1","user_id":"1","item_title":"ad","description":"ad","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"106","quantity":"0","units":"asokaso","date":"2013-11-13 18:04:48","pantry_id":"1","user_id":"1","item_title":"sokok","description":"oakoak","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"2"},{"need_id":"107","quantity":"0","units":"","date":"2013-11-13 19:21:35","pantry_id":"1","user_id":"1","item_title":"a recurring needz","description":"stuff we always want","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"1"},{"need_id":"108","quantity":"0","units":"large","date":"2013-11-13 20:55:02","pantry_id":"1","user_id":"1","item_title":"emergency stuffs","description":"stuffz","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"2"},{"need_id":"109","quantity":"0","units":"","date":"2013-11-13 19:21:15","pantry_id":"1","user_id":"1","item_title":"apples!","description":"red delicous","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"1"},{"need_id":"110","quantity":"0","units":"","date":"2013-11-13 19:22:02","pantry_id":"1","user_id":"1","item_title":"Apples","description":"A recurring need","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"1"},{"need_id":"111","quantity":"0","units":"","date":"2013-11-13 19:44:06","pantry_id":"1","user_id":"1","item_title":"Orangesz","description":"A recurring need","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"1"},{"need_id":"112","quantity":"0","units":"","date":"2013-11-13 20:00:19","pantry_id":"1","user_id":"1","item_title":"oranges","description":"delicous oranges","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"1"},{"need_id":"113","quantity":"0","units":"","date":"2013-11-13 19:52:28","pantry_id":"1","user_id":"1","item_title":"stuff","description":"ltos","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"1"},{"need_id":"114","quantity":"0","units":"","date":"2014-10-25 13:24:55","pantry_id":"1","user_id":"1","item_title":"applesz","description":"lots","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"1"},{"need_id":"115","quantity":"0","units":"","date":"2013-11-13 20:25:03","pantry_id":"1","user_id":"1","item_title":"apples","description":"red","category":"","is_perishable":"1","is_refrigerated":"0","need_type":"1"},{"need_id":"116","quantity":"0","units":"bags","date":"2013-11-13 20:25:46","pantry_id":"1","user_id":"1","item_title":"peachers","description":"canz","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"117","quantity":"0","units":"bags","date":"2013-11-13 20:32:54","pantry_id":"1","user_id":"1","item_title":"Oranges","description":"lots","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"118","quantity":"0","units":"bags","date":"2013-11-13 20:33:48","pantry_id":"1","user_id":"1","item_title":"Oranges","description":"lots of 'em","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"119","quantity":"0","units":"bag","date":"2013-11-13 20:39:41","pantry_id":"1","user_id":"1","item_title":"Orangess","description":"lots","category":"","is_perishable":"1","is_refrigerated":"0","need_type":"0"},{"need_id":"120","quantity":"0","units":"","date":"2013-11-13 20:38:40","pantry_id":"1","user_id":"1","item_title":"sad","description":"adasd","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"1"},{"need_id":"121","quantity":"0","units":"asda","date":"2014-10-25 13:23:06","pantry_id":"1","user_id":"1","item_title":"adasd","description":"dsad","category":"","is_perishable":"1","is_refrigerated":"0","need_type":"0"},{"need_id":"122","quantity":"0","units":"ad","date":"2013-11-13 20:42:28","pantry_id":"1","user_id":"1","item_title":"asdasd","description":"adad","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"0"},{"need_id":"123","quantity":"0","units":"aha","date":"2013-11-13 20:42:58","pantry_id":"1","user_id":"1","item_title":"adhasd","description":"adhad","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"2"},{"need_id":"124","quantity":"0","units":"","date":"2014-06-27 12:15:33","pantry_id":"1","user_id":"871","item_title":"duck","description":"duck","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"1"},{"need_id":"127","quantity":"1","units":"","date":"2014-10-25 13:25:08","pantry_id":"1","user_id":"1","item_title":"Dry Pasta","description":"Variety","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"1"},{"need_id":"128","quantity":"15","units":"KG","date":"2014-10-25 13:25:39","pantry_id":"1","user_id":"1","item_title":"Turkey","description":"Frozen whole","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"2"},{"need_id":"129","quantity":"10","units":"boxes","date":"2014-10-25 13:26:12","pantry_id":"1","user_id":"1","item_title":"Gravy Mix","description":"powdered","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"2"},{"need_id":"141","quantity":"800","units":"Kg","date":"2015-09-09 21:01:44","pantry_id":"806","user_id":"962","item_title":"Apples","description":"Granny Smith","category":"","is_perishable":"1","is_refrigerated":"0","need_type":"2"},{"need_id":"142","quantity":"50","units":"KG","date":"2015-09-09 21:02:03","pantry_id":"806","user_id":"962","item_title":"Rice","description":"Long Grain","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"143","quantity":"1000","units":"Cans","date":"2015-09-09 21:02:26","pantry_id":"806","user_id":"962","item_title":"Canned Vegetables","description":"Variety","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"},{"need_id":"144","quantity":"50","units":"KG","date":"2015-09-09 21:03:31","pantry_id":"806","user_id":"962","item_title":"Turkey","description":"Frozen","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"2"},{"need_id":"145","quantity":"1","units":"","date":"2015-09-09 21:03:48","pantry_id":"806","user_id":"962","item_title":"Dry Pasta","description":"Bags","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"1"},{"need_id":"146","quantity":"100","units":"KG","date":"2015-09-09 21:07:05","pantry_id":"806","user_id":"962","item_title":"Fruit","description":"Seasonal","category":"","is_perishable":"1","is_refrigerated":"1","need_type":"2"},{"need_id":"147","quantity":"14","units":"","date":"0000-00-00 00:00:00","pantry_id":"1","user_id":"1","item_title":"uyf","description":"","category":"","is_perishable":"0","is_refrigerated":"0","need_type":"0"}]]
            });
        }]);

}


