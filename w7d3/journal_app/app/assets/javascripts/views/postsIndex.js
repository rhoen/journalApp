JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts"],
  tagName: 'ul',
  initialize: function () {
    this.listenTo(this.collection, "sync remove add", this.render);
  },

  render: function() {
    debugger;
    this.$el.empty();
    this.collection.forEach(function(post) {

      var postView = new JournalApp.Views.Post({model: post, collection: this.collection});
      this.$el.append(postView.render().$el);
    }.bind(this));

    return this;
  }
});
