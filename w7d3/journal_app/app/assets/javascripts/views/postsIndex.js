JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts"],
  tagName: 'ul',
  render: function() {
    this.collection.forEach(function(post) {
      var postView = new JournalApp.Views.Post({model: post});
      this.$el.append(postView.render().$el);
    }.bind(this));

    return this;
  }
});
