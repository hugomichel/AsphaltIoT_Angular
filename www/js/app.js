
/*This file is part of Asphalt
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
    */
// Ionic Starter App    
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material', 'ionMdInput','firebase'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })




    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    .state('app.ListCtrl', {
        url: '/ListCtrl',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    .state('app.Dashboard', {
        url: '/Dashboard',
        views: {
            'menuContent': {
                templateUrl: 'templates/Dashboard.html',
                controller: 'DashboardCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    .state('app.profileParking', {
    url: '/profileParking',
    views: {
        'menuContent': {
            templateUrl: 'templates/profileParking.html',
            controller: 'ProfileCtrl'
        },
        'fabContent': {
            template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-plus"></i></button>',
            controller: function ($timeout) {
                /*$timeout(function () {
                    document.getElementById('fab-profile').classList.toggle('on');
                }, 800);*/
            }
        }
    }
})

.state('app.profileSettings', {
    url: '/profile',
    views: {
        'menuContent': {
            templateUrl: 'templates/profileSettings.html',
            controller: 'ProfileCtrl'
        },
        'fabContent': {
            template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-plus"></i></button>',
            controller: function ($timeout) {
                /*$timeout(function () {
                    document.getElementById('fab-profile').classList.toggle('on');
                }, 800);*/
            }
        }
    }
})

.state('app.mapITESM', {
        url: '/map',
        views: {
            'menuContent': {
                templateUrl: 'templates/mapITESM.html',
                controller: 'MapCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    .state('app.mapINTEL', {
        url: '/map',
        views: {
            'menuContent': {
                templateUrl: 'templates/mapINTEL.html',
                controller: 'MapCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })
/*
    .state('app.Register', {
        url: '/Register',
        views: {
            'menuContent': {
                templateUrl: 'templates/Register.html',
                controller: 'Register'
            },
            'fabContent': {
                template: ''
            }
        }
    })
*/

    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
});
