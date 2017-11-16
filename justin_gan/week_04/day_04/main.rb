require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

# Index: Shows all boulders
get '/boulders' do
  @boulders = query_db "SELECT * FROM boulders"
  erb :boulders_index
end

# New: Presents a form to fill in information for a new boulder
get '/boulders/new' do
  erb :boulders_new
end

# Create: Adds a new boulder to the database
post '/boulders' do
  query_db "INSERT INTO boulders (name, grade, crag, country, ascensionists, image) VALUES ('#{ params['name'] }', '#{ params['grade'] }', '#{ params['crag'] }', '#{ params['country'] }', '#{ params['ascensionists'] }', '#{ params['image'] }')"
  redirect to('/boulders')
end

# Show: Shows information for a single boulder
get '/boulders_show/:id' do
  @boulder = query_db("SELECT * FROM boulders WHERE id = #{ params[:id] }").first
  erb :boulders_show
end

def query_db sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  result = db.execute sql_statement
  db.close
  result
end
