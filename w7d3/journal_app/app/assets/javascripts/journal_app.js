window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $el = $('.journal');
    new JournalApp.Routers.PostsRouter({$el: $el});
  }
};

$(document).ready(function(){
  JournalApp.initialize();
  Backbone.history.start();
});
