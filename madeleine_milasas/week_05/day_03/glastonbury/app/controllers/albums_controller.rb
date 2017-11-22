class AlbumsController < ApplicationController
  def index
    @albums = Album.all
  end

  def new
  end

  def edit
  end

  def show
    @album = Album.find params[:id]
  end
end
