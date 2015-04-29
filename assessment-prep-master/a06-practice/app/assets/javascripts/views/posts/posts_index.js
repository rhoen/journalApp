PostApp.Views.PostsIndex = Backbone.View.extend({
  template: _.template('<h3>Post Index View</h3><ul><% posts.each(function (post) { %><li><a href="#/posts/<%= post.id %>"><%= post.escape("title") %></a><button class="delete" data-id="<%= post.id %>">Delete!</button><a href="#/posts/<%= post.id %>/edit">Edit</a></li><% }); %></ul><a href="#/posts/new">New Post</a>'),
});
