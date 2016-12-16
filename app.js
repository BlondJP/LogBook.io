var LogBookApp = angular.module('LogBookApp', []);

LogBookApp.controller('LogsListController', function ($scope){

    $scope.log = {title: null, content: null};

    $scope.logs = [
        { title: "Learn", content: 'Coding JS'},
        { title: "Forget", content: 'Coding Java'},
        { title: "Say", content: 'Hello World'}
    ];

    $scope.addLog = function (log){
        $scope.logs.push(log);
    }
});