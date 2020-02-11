var App = App || {};

App.views.todoView = Backbone.View.extend({
  el: "#homeview",
  template: _.template($("#item-template").html()),
  events: {},

  initialize: function() {
    console.log("tessst");
    this.render();
  },

  render: function() {
    console.log("insss render");
    // var temp = this.model.toJSON();
    this.$el.html("HELasLO WOsssRLD");
    //   this.input = this.$('.edit');
    return this; // enable chained calls
  }
});
