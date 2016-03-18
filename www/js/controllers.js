/*
This file is part of Asphalt
  Asphalt is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
 Asphalt is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with Asphalt.  If not, see <http://www.gnu.org/licenses/>.

Copyright © 2016 4Loop
*/

/* global angular, document, window */
'use strict';

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout,$firebaseObject) {
    // Form data for the login modal
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };

    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };

    //AUTENTIFICANCION
    //firebaseReference
/*
    $scope.rootUser = "https://letsparkiot.firebaseio.com/Users/";
    $scope.root = "https://letsparkiot.firebaseio.com/";
    var ref = new Firebase($scope.root);

    //userData CHECK
    var authData = ref.getAuth();
    if (authData) {
      console.log("User " + authData.uid + " is logged in with " + authData.provider);

        $scope.UserData = {};

        //Get Actual User
        var getUser = function(){
          var userRef = new Firebase($scope.root);
          var authData = userRef.getAuth();
          $scope.UserData.uid = authData.uid;
        };
        //Sacar datos del Usuario
        setTimeout(getUser(),500);
        console.log($scope.UserData.uid);
        $scope.refUser = new Firebase($scope.rootUser + $scope.UserData.uid);
        $scope.ref = new Firebase($scope.root);
        console.log($scope.rootUser + $scope.UserData.uid);
        $scope.email = $firebaseObject($scope.refUser.child('Email'));

        $scope.email.$loaded().then(function () {
            $scope.email = $scope.email.$value;
        });
    } else {
      console.log("User is logged out");
    }

*/
    //console.log($scope.email.$value);

})

.controller('LoginCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk,$ionicPopup, $state) {
  //inicio
    $scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();
    //User data
    $scope.user = {};
    $scope.root = "https://letsparkiot.firebaseio.com/";
    $scope.ref = new Firebase($scope.root);
    $scope.uid;
    //LogOut

    $scope.ref.unauth();
    var authData = $scope.ref.unauth();
    if (authData) {
      console.log("User " + authData.uid + " is logged in with " + authData.provider);
    } else {
      console.log("User is logged out");
    }

    $scope.Register = function(){
      console.log($scope.user.email);

      $scope.ref.createUser({
        email    : $scope.user.email,
        password : $scope.user.pass
      }, function(error, userData) {
        if (error) {
          var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'User already in use!'
            });
          console.log("Error creating user:", error);
        } else {
          console.log("Successfully created user account with uid:", userData.uid);
          var alertPopup = $ionicPopup.alert({
                title: 'Succesfully registered',
            });
          var ref2 = new Firebase($scope.root + "Users").child(userData.uid);
          ref2.set({
            Email:$scope.user.email,
            Location: "",
            Area: "",
            Zone: ""
          });
          $scope.LogIn();
        }
      });





      //$scope.ref.getAuth()
      //console.log("Uid: " + $scope.ref.getAuth().uid);
/*
      var postsRef = $scope.ref.child("Users");
      var newPostRef = postsRef.push();
      newPostRef.set({
        author: "hola",
        title: "2"
      });
      var usersRef = $scope.ref.child("Users");
      usersRef.set({
        $uid: {
          date_of_birth: "June 23, 1912",
          full_name: "Alan Turing"
        },
        gracehop: {
          date_of_birth: "December 9, 1906",
          full_name: "Grace Hopper"
        }
      });
*/

    };

    $scope.LogIn = function () {
      $scope.ref.authWithPassword({
        email    : $scope.user.email,
        password : $scope.user.pass
      }, function(error, authData) {
        if (error) {
          var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          $state.go('app.Dashboard');
        }
      });
/*
      ref.authWithPassword({
        email    : $scope.user.email,
        password : $scope.user.pass
      }, authHandler);

      var authData = ref.getAuth();
      if (authData) {
        console.log("User " + authData.uid + " is logged in with " + authData.provider);
      } else {
        console.log("User is logged out");
      }

      function authHandler(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
        }
      }
      ref.authWithOAuthPopup("<provider>", authHandler);
      ref.authWithOAuthRedirect("<provider>", authHandler);
*/
    };

    $scope.Auth = function(){

    }

})

.controller('ProfileCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk,$firebaseArray) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();

    //userData
    $scope.UserData = {};
    $scope.ParkingData = {};
    $scope.AreaData = {};
    $scope.ZoneData = {};

    //firebaseReference
    $scope.rootUser = "https://letsparkiot.firebaseio.com/Users/";
    $scope.root = "https://letsparkiot.firebaseio.com/";

    //Get Actual User
    var getUser = function(){
      var userRef = new Firebase($scope.root);
      var authData = userRef.getAuth();
      $scope.UserData.uid = authData.uid;
    };
    //Sacar datos del Usuario
    setTimeout(getUser(),500);
    console.log($scope.UserData.uid);
    $scope.refUser = new Firebase($scope.rootUser + $scope.UserData.uid);
    $scope.ref = new Firebase($scope.root);
    console.log($scope.rootUser + $scope.UserData.uid);


    //Sacar Parkings
    /*
    $scope.locations = $firebaseArray($scope.root + "Parking");
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
*/
    /////

    $scope.ref.child("Parking").once("value", function(snapshot) {
      // The callback function will get called twice, once for "fred" and once for "barney"
      snapshot.forEach(function(childSnapshot){
        $scope.ParkingData[childSnapshot.key()] = childSnapshot.val();
        console.log(childSnapshot.key());
      });



      /*snapshot.forEach(function(childSnapshot) {
        // key will be "fred" the first time and "barney" the second time
        //$scope.ParkingData = childSnapshot.key();
        //console.log($scope.ParkingData);
        // childData will be the actual contents of the child
        $scope.ParkingData = childSnapshot.val();
        console.log(childSnapshot);
      });*/
    });

    //$scope.ParkingData = $scope.refUser.child(location);
    //console.log($scope.ParkingData);
    //Sacar Zonas




})

.controller('DashboardCtrl', function($scope, $firebaseArray,$state,$ionicPopup) {
  $scope.showHeader();
  //Prueba Identificación
  var ref = new Firebase("https://letsparkiot.firebaseio.com/");
  var authData = ref.getAuth();
  if (authData) {
    console.log("User " + authData.uid + " is logged in with " + authData.provider);
  } else {
    console.log("User is logged out");
    var alertPopup = $ionicPopup.alert({
          title: 'User not logged in',
          template: 'Please Reconnect'
      });
    $state.go('app.login');
  }
  //Inicia Referencia
      var location;
      var place;

      var ref= new Firebase("https://letsparkiot.firebaseio.com/Parking");

      $scope.locations = $firebaseArray(ref);
      $scope.places;
      $scope.zones;


      $scope.showSelectLocation = function(mySelect) {
        location = mySelect;
        $scope.places = $firebaseArray(ref.child(location).child("General"));
        console.log(location + " location");
      }

      $scope.showSelectPlace = function(mySelect) {
        place = mySelect;
        $scope.zones = $firebaseArray(ref.child(location).child(place));
        console.log(place + " Place");
      }

      $scope.auth = function(){
        var ref = new Firebase("https://letsparkiot.firebaseio.com/");
        var authData = ref.getAuth();
        if (authData) {
          console.log("User " + authData.uid + " is logged in with " + authData.provider);
        } else {
          console.log("User is logged out");
        }
      }

    })
    .controller('MapCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.showHeader();


    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });

})
;

;
