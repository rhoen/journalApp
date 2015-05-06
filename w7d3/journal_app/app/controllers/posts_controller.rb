class PostsController < ApplicationController
  def index
  end

  def show
  end

  def update
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render json: @post
    else
      render json: @post.errors
    end
  end

  def destroy
  end

  private
  def post_params
    params.require(:post).permit(:title, :body)
  end
end
