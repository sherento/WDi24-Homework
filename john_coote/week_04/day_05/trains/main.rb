require "sinatra"
require "sinatra/reloader"
require "sqlite3"
require "active_record"
require "pry"

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger  = Logger.new(STDERR)

class Parent < ActiveRecord::Base
end
class Child < ActiveRecord::Base
end

get '/' do
  erb :home
end

# index - show all parents
get '/parents' do
  @parents = Parent.all
  erb :parents_index
end

# make a new parent
get '/parents/new' do
  erb :parents_new
end

# info page on single parent
get '/parents/:id' do
  @parent = Parent.find params[:id]
  @mapref = @parent.mapref

  if @mapref.nil?
    @mapref = "0,0"
  end
  @gmapsrc = "https://www.google.com/maps/embed/v1/place?q=" + @mapref + "&key=AIzaSyB7nJABK2HEiQKo4V-FCEMWX5xag8vVJeA"
  # binding.pry
  erb :parents_show
end

# edit page for parents
get '/parents/:id/edit' do
  @parent = Parent.find params[:id]
  erb :parents_edit
end

# update section for parents.
post '/parents/:id' do
  parent = Parent.find params[:id]
  parent.update :name => params[:name], :mapref => params[:mapref], :image => params[:image], :fav_rest => params[:fav_rest], :fav_rest_img => params[:fav_rest_img]
  redirect to("/parents/#{params[:id]}")
end
