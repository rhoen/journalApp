JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts"]({posts: this.collection}),

  render: function() {
    this.$el.html(template);
  }
});
