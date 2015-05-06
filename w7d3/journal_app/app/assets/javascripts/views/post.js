JournalApp.Views.Post = Backbone.View.extend({
  tagName: 'li',
  template: JST['posts/listItem'],
  render: function (){
    this.$el.append(this.template({post: this.model}));
    return this;
  }
});
