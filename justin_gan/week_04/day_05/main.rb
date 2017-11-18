require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Boulder < ActiveRecord::Base
end

get '/' do
  erb :home
end

# Index
get '/boulders' do
  @boulders = Boulder.all
  erb :boulders_index
end

# New
get '/boulders/new' do
  erb :boulders_new
end

# Create
post '/boulders' do
  boulder = Boulder.new
  boulder.name = params[:name]
  boulder.grade = params[:grade]
  boulder.crag = params[:crag]
  boulder.country = params[:country]
  boulder.ascensionists = params[:ascensionists]
  boulder.image = params[:image]
  boulder.save

  redirect to ("/boulders/#{ boulder.id }")
end

# Show
get '/boulders/:id' do
  @boulder = Boulder.find params[:id]
  erb :boulders_show
end

# Delete
get '/boulders/:id/delete' do
  boulder = Boulder.find params[:id]
  boulder.destroy
  redirect to("/boulders")
end

# Edit
get '/boulders/:id/edit' do
  @boulder = Boulder.find params[:id]
  erb :boulders_edit
end

# Update
post '/boulders/:id' do
  boulder = Boulder.find params[:id]
  boulder.update :name => params[:name],
                 :grade => params[:grade],
                 :crag => params[:crag],
                 :country => params[:country],
                 :ascensionists => params[:ascensionists],
                 :image => params[:image]

  redirect to("/boulders/#{ boulder.id }")
end

after do
  ActiveRecord::Base.connection.close
end
