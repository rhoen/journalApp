JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts"],

  render: function() {
    console.log("this is: " + this);
    this.$el.html(this.template({posts: this.collection}));
  }
});
