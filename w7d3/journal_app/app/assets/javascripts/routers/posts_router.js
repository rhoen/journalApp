JournalApp.Routers.PostsRouter = Backbone.Router.extend({
  routes: {
    "" : "index",
    "posts/:id" : "show"
  },
  initialize: function(options) {
    this.$el = options.$el;
    this.posts = new JournalApp.Collections.Posts();
  },
  index: function () {
    this.$el.empty();
    this.posts.fetch({
      success: function() {
        var postsIndexView = new JournalApp.Views.PostsIndex({collection: this.posts});
        console.log(postsIndexView.render().$el);
        this.$el.append(postsIndexView.render().$el);
      }.bind(this)
    });
  },

  show: function (id) {
    this.posts.getOrFetch(id, function(post) {
      var postShow = new JournalApp.Views.PostShow({model: post});
      this.$el.html(postShow.render().$el);
    }.bind(this));

  }
});
