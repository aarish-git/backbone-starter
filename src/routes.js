var App = App || {};

App.Router = Backbone.Router.extend({
  routes: {
    '': 'homeView',
    'list' : 'todolist'
  },

  homeView: function() {
    new App.views.HomeView();
    console.log("homeview")
  },

  todolist: function() {
    console.log("todoview")
    new App.views.todoView();
  }
});
