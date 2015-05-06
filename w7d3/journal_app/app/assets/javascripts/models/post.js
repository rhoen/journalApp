if (!Journal) {
  window.Journal = {};
}
Journal.Post = Backbone.Models.extend ({
  urlRoot: '/posts'
});
