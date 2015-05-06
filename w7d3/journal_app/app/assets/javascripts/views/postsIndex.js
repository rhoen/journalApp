JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts"],

  render: function() {
    this.$el.html(template({posts: this.collection}));
  }
});
