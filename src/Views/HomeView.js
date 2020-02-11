var App = App || {};

// var PlayerCollection = Backbone.Collection.extend({
//   model: Player
// });

// var PlayerObject =  new PlayerCollection([Player, player1,player2, player3]);
var PlayerObject =  new App.collections.PlayerCollection([App.models.Player]);


App.views.HomeView = Backbone.View.extend({
  el: "#homeview",
  // model: player2,
  // collection: PlayerObject,
  template: Handlebars.compile($("#item-template").html()),
  initialize: function() {
    console.log(PlayerObject, 'player')
    this.render();
  },
  render: function() {
    this.$el.html(
      this.template({
        data: PlayerObject.toJSON()
      })
    );
  }
});
