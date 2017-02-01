/**
 * Created by {{cookiecutter.author}} {% now 'utc' %}.
 */
var helloWorldController = function ($http) {
    this.inputText = 'World';
};

angular.module('helloWorld')
.component('helloWorld', {
    templateUrl: '/apps/partials/helloworld/helloworld.html',
    controller: [
        helloWorldController
    ]
});