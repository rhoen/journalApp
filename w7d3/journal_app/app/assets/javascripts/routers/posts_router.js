JournalApp.Routers.PostsRouter = Backbone.Router.extend({
  routes: {
    "" : "index",
    "posts/new" : "newPost",
    "posts/:id" : "show",
    "rhoen" : "rhoen"
  },
  initialize: function () {
    this.posts = new JournalApp.Collections.Posts();
    this.$content = $(".content");
    this.$sidebar = $('.sidebar');
  },

  rhoen: function () {
    alert('HI');
  },

  newPost: function () {
    var post = new JournalApp.Models.Post();
    var formView = new JournalApp.Views.PostForm({model: post, collection: this.posts});
    this.$content.html(formView.render().$el);
  },

  index: function () {
    $(".sidebar").empty();
    this.posts.fetch({
      success: function() {
        var postsIndexView = new JournalApp.Views.PostsIndex({collection: this.posts});
        this.$sidebar.append(postsIndexView.render().$el);
      }.bind(this)
    });
  },

  show: function (id) {
    this.posts.getOrFetch(id, function(post) {
      var postShow = new JournalApp.Views.PostShow({model: post});
      this.$content.html(postShow.render().$el);
    }.bind(this));

  }
});
