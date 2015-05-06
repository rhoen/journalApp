window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    alert('hello world');
  }
};

$(document).ready(function(){
  JournalApp.initialize();
  console.log("hello world");
  var posts = new JournalApp.Collections.Posts();
  posts.fetch({
    success: function() {
      var postsIndexView = new JournalApp.Views.PostsIndex({collection: posts});
      console.log(postsIndexView.render().$el);
      $('body').append(postsIndexView.render().$el);
    }
  });
});
