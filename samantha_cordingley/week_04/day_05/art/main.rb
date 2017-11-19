require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

#Rails will write this code for me next week
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

#Rails will also write this. Logs SQL being written in terminal (optional)
ActiveRecord::Base.logger = Logger.new(STDERR)

#Connect active record to my sql table / must be singular
class Artwork < ActiveRecord::Base
end

#connect home page
get '/' do
  erb :home
end

#connect index page to show full list of artworks
get '/artworks' do
  @artworks = Artwork.all #get all artwork from database
  erb :artworks_index
end

#new page. Page to show 'create' form action
get '/artworks/new' do
  erb :artwork_new
end

#create action. post new artwork to database and as a result will display on index page
post '/artworks' do
  artwork = Artwork.new
  artwork.name = params[:name]
  artwork.author = params[:author]
  artwork.year = params[:year]
  artwork.canvas = params[:canvas]
  artwork.image = params[:image]
  artwork.save #actually saves it
  redirect to ("/artworks/#{ artwork.id }") #get new artwork
end

#show page. Shows page for individual artwork
get '/artworks/:id' do
  @artwork = Artwork.find params[:id]
  erb :artwork_show
end

#edit page. Holds edit form
get '/artworks/:id/edit' do
  @artwork = Artwork.find params[:id]
  erb :artwork_edit
end

#post action to update data on database after Edit
post '/artworks/:id' do
  artwork = Artwork.find params[:id]
artwork.update :name => params[:name], :author => params[:author], :year => params[:year], :canvas => params[:canvas], :image => params[:image]
redirect to ("/artworks/#{ params[:id] }")
end
