var app = angular.module("myApp", []).controller("namesController", function($scope) {
  $scope.names = [
    {name: "Jani", country : "Norway"},
    {name: "Hege", country : "Denmark"},
    {name: "Kai", country : "Sweden"}];
});
