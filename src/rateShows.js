var rateShowsApp = angular.module('rateShowsApp', ['ngRoute']);

rateShowsApp.factory('ShowList', function(){
  this.showList = [
      {name:'Game of Thrones', tagline: "Fear is For the Winter", rating:5, id:'GoT'},
      {name:'Orange Is The New Black', tagline: "Bitches Gots to Learn", rating:4, id:'OITNB'},
      {name:'Twin Peaks', tagline: "A town where everyone knows everyone and nothing is what it seems", rating:4, id:'TwPk'},
      {name:'BoJack Horseman', tagline: "Don't look back. You're not going that way.", rating:3, id:'BoHm'},
      {name:'Stranger Things', tagline: "Some Doors Can't Be Closed", rating:4, id:'StrgrT'},
      {name:'The Crown', tagline: "Two houses, two courts, one Crown", rating:5, id:'Cr'},
      {name:'The Good Doctor', tagline: "Good Doctor, Bad Habits", rating:2, id:'TGD'},
      {name:'Defenders', tagline: "not here to make friends", rating:2, id:'Def'}
      
      ];

   return this;

});

rateShowsApp.run(function($rootScope) {
        $rootScope.nameToImgUrl = function(showName) {
          return "images/"+showName.replace(/\s/g, '') + ".jpg";
        };
    });

rateShowsApp.nameToImgUrl = function(showName) {
    return "images/"+showName.replace(/\s/g, '') + ".jpg";
}

rateShowsApp.config(function($routeProvider, $locationProvider){
      $routeProvider.
        when('/rateShow/:id', {
            templateUrl: 'rateShow.html',
            controller: 'RateShowsSingleController'
        }).
        when('/shows', {
            templateUrl: 'trailer.html',
            controller: 'TrailerViewController'
        });

         // use the HTML5 History API
        $locationProvider.html5Mode(true);

 });
rateShowsApp.controller('RateShowsListController', function($scope, ShowList) {
    var rateShowsList = this;
    rateShowsList.shows = ShowList.showList;
    $scope.message = "All Shows View : Rate Your Show";

    //  $scope.message = ShowList;
      /*rateShowsList.rateShow = function() {
      
      };*/

   /*   $scope.nameToUrl = function (showName) {
      	return "images/"+showName.replace(/\s/g, '') + ".jpg";
      };
*/

 });

rateShowsApp.controller('RateShowsSingleController', function($scope, $routeParams, ShowList, $filter) {
    $scope.message = "Rate this particular show" + " "+ $routeParams.id;

    //Show Particular Show Info : 

    $scope.currentShow = $filter('filter')(ShowList.showList, {'id':$routeParams.id});
});

rateShowsApp.controller('TrailerViewController', function($scope) {
    $scope.message = "Watch trailers of the shows";
});