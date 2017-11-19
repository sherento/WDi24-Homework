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

# update section for parents.
post '/' do
  @start = params[:start]
  @destination = params[:destination]
  "code here for trip calculations. start = " + @start + ", destination = " + @destination
end


# index - show all parents
get '/parents' do
  @parents = Parent.all
  erb :parents_index
end

# index - show all children
get '/children' do
  @children = Child.all
  erb :children_index
end

# make a new parent
get '/parents/new' do
  erb :parents_new
end

# info page on single parent
get '/parents/:id' do
  @parent = Parent.find params[:id]
  @children = Child.all

  @mapref = @parent.mapref
  if @mapref.nil?
    @mapref = "0,0"
  end
  @fav_rest_mapref = @parent.fav_rest_mapref
  if @fav_rest_mapref.nil?
    @fav_rest_mapref = "0,0"
  end
  @gAPIKey = "AIzaSyB7nJABK2HEiQKo4V-FCEMWX5xag8vVJeA"
  @gmapURL = "https://www.google.com/maps/embed/v1/directions?key=" + @gAPIKey + "&origin=" + @mapref + "&destination=" + @fav_rest_mapref + "&mode=walking&zoom=18"

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
  parent.update :name => params[:name], :mapref => params[:mapref], :image => params[:image], :fav_rest => params[:fav_rest], :fav_rest_img => params[:fav_rest_img], :fav_rest_mapref => params[:fav_rest_mapref]
  redirect to("/parents/#{params[:id]}")
end




################################

# class Station
#   attr_accessor :name, :connections
#
#   def initialize(name='', connections=[])
#     @name = name
#     @connections = connections
#   end
#
# end
#
# @parents.each do |parent
#
#   name = parent.name
#   parent = Station.new
# end
#
# #
# # <% @parents.each do |parent| %>
# #   <li>
# #     <a href="/parents/<%= parent.id%> "><%= parent.name %></a>
# #   </li>
# # <% end %>
#
# # <% @children.each do |child| %>
# #   <% if child.parent_id == @parent.id %>
# #     <li>
# #       <%= child.name %>
# #     </li>
# #   <% end %>
# # <% end %>





stations = {
  'Hornsby' => {
    :name => 'Hornsby',
    :connections => ['Epping', 'Chatswood', 'Brooklyn']
  },
  'Epping' => {
    :name => 'Epping',
    :connections => ['Hornsby', 'Chatswood', 'Strathfield']
  },
  'Chatswood' => {
    :name => 'Chatswood',
    :connections => ['Hornsby', 'Epping', 'Central']
  },
  'Strathfield' => {
    :name => 'Strathfield',
    :connections => ['Lidcombe', 'Epping', 'Central']
  },
  'Bankstown' => {
    :name => 'Bankstown',
    :connections => ['Sydneham', 'Cabramatta','Lidcombe']
  },
  'Cabramatta' => {
    :name => 'Cabramatta',
    :connections => ['Blacktown', 'Bankstown','Lidcombe', 'Glenfield']
  },
  'Sydneham' => {
    :name => 'Sydneham',
    :connections => ['Glenfield', 'Bankstown','Central']
  },
  'Central' => {
    :name => 'Central',
      :connections => ['Chatswood', 'Strathfield', 'Sydneham']
  },
  'Brooklyn' => {
    :name => 'Brooklyn',
    :connections => ['Hornsby']
  },
  'Glenfield' => {
    :name => 'Glenfield',
    :connections => ['Cabramatta','Sydneham']
  },
  'Lidcombe' => {
    :name => 'Lidcombe',
    :connections => ['Cabramatta','Bankstown', 'Strathfield']
  },
  'Blacktown' => {
    :name => 'Blacktown',
    :connections => ['Cabramatta']
  }
} # end of stations hash
