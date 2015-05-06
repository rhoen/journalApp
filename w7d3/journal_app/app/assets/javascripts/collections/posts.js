; if (typeof Journal === "undefined") {
  window.Journal = {};
}

Journal.Posts = Backbone.Collection.extend ({
  model: Journal.Post,
  url: Journal.Post.urlRoot,

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
