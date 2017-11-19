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
  belongs_to :country
end

class Country < ActiveRecord::Base
  has_many :boulders
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
  binding.pry
  erb :boulders_show
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

# Delete
get '/boulders/:id/delete' do
  boulder = Boulder.find params[:id]
  boulder.destroy
  redirect to("/boulders")
end

###############################################################################

# Index
get '/countries' do
  @countries = Country.all
  erb :countries_index
end

# New
get '/countries/new' do
  erb :countries_new
end

# Create
post '/countries' do
  country = Country.new
  country.name = params[:name]
  country.continent = params[:continent]
  country.capital = params[:capital]
  country.area = params[:area]
  country.population = params[:population]
  country.save

  redirect to("/countries/#{ country.id }")
end

# Show
get '/countries/:id' do
  @country = Country.find params[:id]
  erb :countries_show
end

# Edit
get '/countries/:id/edit' do
  @country = Country.find params[:id]
  erb :countries_edit
end

# Update
post '/countries/:id' do
  country = Country.find params[:id]
  country.update :name => params[:name],
                 :continent => params[:continent],
                 :capital => params[:capital],
                 :area => params[:area],
                 :population => params[:population]

  redirect to("/countries/#{ country.id }")
end

# Delete
get '/countries/:id/delete' do
  country = Country.find params[:id]
  country.destroy
  redirect to("/countries")
end

after do
  ActiveRecord::Base.connection.close
end
