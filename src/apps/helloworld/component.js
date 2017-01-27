/**
 * Created by shimon on 1/27/17.
 */
var helloWorldController = function ($http) {
    this.inputText = 'World';
};

angular.module('helloWorld')
.component('helloWorld', {
    templateUrl: '/apps/partials/helloworld.html',
    controller: [
        '$http',
        helloWorldController
    ]
});