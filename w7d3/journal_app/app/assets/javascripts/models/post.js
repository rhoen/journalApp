if (!Journal) {
  window.Journal = {};
}
Journal.Post = Backbone.Models.Post.extend ({
  urlRoot: '/posts';
});
