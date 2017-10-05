angular.module('rateShowsApp', [])
  .controller('RateShowsListController', function() {
    var rateShowsList = this;
    rateShowsList.shows = [
      {text:'The Game of Thrones', rating:5},
      {text:'Orange Is The New Black', rating:4},
      {text:'Twin Peaks', rating:4},
      {text:'BoJack Horseman', rating:3},
      {text:'Stranger Things', rating:4},
      {text:'The Crown', rating:5},
      {text:'The Good Doctor', rating:2},
      {text:'Defenders', rating:2}];

 
    rateShowsList.rateShow = function() {
    
    };
 
 });