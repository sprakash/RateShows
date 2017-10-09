'use strict';

/**
 * @ngdoc function
 * @name RateShowsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the srcApp
 */
angular.module('RateShowsApp', [])
  .controller('RateShowsListController', function($scope) {
    var rateShowsList = this;
    rateShowsList.shows = [
      {name:'Game of Thrones', tagline: "Fear is For the Winter", rating:5},
      {name:'Orange Is The New Black', tagline: "Bitches Gots to Learn", rating:4},
      {name:'Twin Peaks', tagline: "A town where everyone knows everyone and nothing is what it seems", rating:4},
      {name:'BoJack Horseman', tagline: "Don't look back. You're not going that way.", rating:3},
      {name:'Stranger Things', tagline: "Some Doors Can't Be Closed", rating:4},
      {name:'The Crown', tagline: "Two houses, two courts, one Crown", rating:5},
      {name:'The Good Doctor', tagline: "Good Doctor, Bad Habits", rating:2},
      {name:'Defenders', tagline: "not here to make friends", rating:2}

      ];

 
    rateShowsList.rateShow = function() {
    
    };

    $scope.nameToUrl = function (showName) {
    	return "images/"+showName.replace(/\s/g, '') + ".jpg";
    };

 });