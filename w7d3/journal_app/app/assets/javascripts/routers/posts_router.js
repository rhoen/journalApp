JournalApp.Routers.PostsRouter = Backbone.Router.extend({
  routes: {
    "" : "index",
    "posts/new" : "newPost",
    "posts/:id" : "show",
    "rhoen" : "rhoen"
  },
  initialize: function(options) {
    this.$el = options.$el;
    this.posts = new JournalApp.Collections.Posts();
  },

  rhoen: function () {
    alert('HI');
  },

  newPost: function () {
    var post = new JournalApp.Models.Post();
    var formView = new JournalApp.Views.PostForm({model: post, collection: this.posts});
    this.$el.html(formView.render().$el);
  },

  index: function () {
    this.$el.empty();
    this.posts.fetch({
      success: function() {
        var postsIndexView = new JournalApp.Views.PostsIndex({collection: this.posts});
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
