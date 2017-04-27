// import 'jquery';
// import 'angular';
// import 'bootstrap/dist/js/bootstrap';
// import 'bootstrap/dist/css/bootstrap';

// document.write('from js');

var app = angular.module("myApp", []); 

app.controller("appCtrl", $scope => {
    $scope.title = 'Danger!';

    $scope.clickme = function() {
        console.log('aaa hi clicked me !!!!');
    }
});