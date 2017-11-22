class AlbumsController < ApplicationController
  def index
    @albums = Album.all
  end

  def new
    @album = Album.new
  end

  def create
    album = Album.create album_params
    redirect_to album
  end


  def edit
  end

  def show
    @album = Album.find params[:id]
  end

  private
  def album_params
    params.require(:album).permit(:name, :release_date, :image, :band_id)
  end
end
