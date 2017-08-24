var app = angular.module("myApp", []);

app.controller("personCtrl", function ($scope) {
  $scope.lastName = "John Deo"
});

app.controller("namesCtrl", function($scope) {
  $scope.names = [{"country":"Norway", "population":50000},
  {"country":"Denmark", "population":70000},
  {"country":"Sweden", "population":60000},
  {"country":"US", "population":1000000},
  {"country":"Canada", "population":90000},
  {"country":"Australia", "population":100000}];

  $scope.sortBy = function(x) {
    $scope.mySortOrder = x;
  };
});

app.controller("costCtrl", function($scope) {
  $scope.price="125.56";
});

app.filter("myFormat", function() {
  return function(x) {
    var i,c,text="";
    for (i = 0; i<x.length;i++) {
      c=x[i];
      if (i%2 == 0) {
        c = c.toUpperCase();
      }
      text = text+c;
    }
    return text;
  };
});
