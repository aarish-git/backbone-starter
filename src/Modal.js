var App = App || {};

App.models.Player  = Backbone.Model.extend({
  defaults: {
    name:'cristiano ronaldo',
    team:'manchester united',
    no:'7'
  },
});

// var player1 = new App.models.Player({
//   name:'ROONEY',
//   team:'manchester united',
//   no:'10'
// });

// var player2 = new App.models.Player({
//   name:'GIGGS',
//   team:'manchester united',
//   no:'11'
// });

// var player3 = new App.models.Player({
//   name:'SCHOLES',
//   team:'manchester united',
//   no:'18'
// });