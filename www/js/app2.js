var myApp = angular.module("Asphalt", ["firebase"]);
var location;

myApp.controller("dataController", ["$scope", "$firebaseArray",
	function($scope, $firebaseArray) {
      var location;
      var place;

      var ref= new Firebase("https://letsparkiot.firebaseio.com");

      $scope.locations = $firebaseArray(ref);
      $scope.places;
      $scope.zones;


      $scope.showSelectLocation = function(mySelect) {
        location = mySelect;
        $scope.places = $firebaseArray(ref.child(location));
        console.log(location + " location");
      }

      $scope.showSelectPlace = function(mySelect) {
        place = mySelect;
        $scope.zones = $firebaseArray(ref.child(location).child(place));
        console.log(place + " Place");
      }
    }


]);


/*
myApp.controller("areaController", ["$scope", "$firebaseArray",
	function($scope, $firebaseArray) {
          var ref = new Firebase("https://letsparkiot.firebaseio.com/ITESM");
          $scope.places = $firebaseArray(ref);
        }
]);
myApp.controller("zoneController", ["$scope", "$firebaseArray",
	function($scope, $firebaseArray) {
          var ref = new Firebase("https://letsparkiot.firebaseio.com/ITESM/General");
          $scope.places = $firebaseArray(ref);
        }
]);*/
