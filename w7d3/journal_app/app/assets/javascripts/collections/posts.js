if (!Journal) {
  window.Journal = {};
}

Journal.Posts = Backbone.Collections.extend ({
  model: Journal.Post,
  url: this.model.urlRoot,

  getOrFetch: function(id) {
    var post = this.get(id);
    if (post) {
      post.fetch();
    } else {
      post = new Journal.Post({id: id});
      post.fetch({
        success: function () {
          this.add(post);
        }.bind(this)
      });
    }
  }

});
