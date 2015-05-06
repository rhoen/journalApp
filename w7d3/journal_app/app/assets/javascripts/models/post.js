; if (typeof Journal === "undefined") {
  window.Journal = {};
}
Journal.Post = Backbone.Model.extend ({
  urlRoot: '/posts'
});
