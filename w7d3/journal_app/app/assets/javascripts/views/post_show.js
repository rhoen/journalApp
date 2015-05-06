JournalApp.Views.PostShow = Backbone.View.extend({
  template: JST['posts/show'],

  events: {
    "click button" : "deletePost"
  },

  render: function() {
    this.$el.html(template({post: this.model}));
    return this;
  },

  deletePost: function () {
    this.model.destroy({
      success: function() {
        this.collection.remove(this.model);
      }.bind(this)
    });
  }

});
