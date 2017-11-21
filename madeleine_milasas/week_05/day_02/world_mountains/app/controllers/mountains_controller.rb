class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all.sort_by { |m| [m.name.downcase] }
  end

  def new
  end

  def create
    mountain = Mountain.new
    mountain.name = params[:name]
    mountain.image = params[:image]
    mountain.base_height = params[:base_height]
    mountain.sea_height = params[:sea_height]
    mountain.location = params[:location]
    mountain.fact = params[:fact]
    mountain.save

    redirect_to mountains_path
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.update :name => params[:name], :image => params[:image], :base_height => params[:base_height], :sea_height => params[:sea_height], :location => params[:location], :fact => params[:fact]

    redirect_to mountain_path(mountain.id)
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy

    redirect_to mountains_path
  end

end
