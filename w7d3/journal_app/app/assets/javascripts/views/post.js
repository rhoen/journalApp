JournalApp.Views.Post = Backbone.View.extend({
  tagName: 'li',
  template: JST['posts/listItem'],
  events: {
    "click button" : "deletePost"
  },
  render: function (){
    this.$el.append(this.template({post: this.model}));
    return this;
  },

  deletePost: function () {
    debugger;
    this.model.destroy({
      success: function() {
        this.collection.remove(this.model);
      }.bind(this)
    });
  }

});
