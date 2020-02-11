(function() {
  $(document).ready(function() {
    //Store router instance
    App.router = new App.Router();
    Backbone.history.start();
  });
})(jQuery); // IIFE
