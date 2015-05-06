JournalApp.Routers.PostsRouter = Backbone.Router.extend({
  routes: {
    "" : "index",
    "posts/:id" : "show"
  },
  initialize: function(options) {
    this.$el = options.$el;
  },
  index: function () {
    var posts = new JournalApp.Collections.Posts();
    posts.fetch({
      success: function() {
        var postsIndexView = new JournalApp.Views.PostsIndex({collection: posts});
        console.log(postsIndexView.render().$el);
        this.$el.append(postsIndexView.render().$el);
      }.bind(this)
    });
  },

  show: function (id) {

  }
});
