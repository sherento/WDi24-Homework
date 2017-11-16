require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

# index
get '/cymbals' do
  @cymbals = query_db 'SELECT * FROM cymbals'
  erb :cymbals_index
end

# new
get '/cymbals/new' do
  erb :cymbals_new
end

post '/cymbals' do
  query_db("INSERT INTO cymbals (maker, name, type, sound, size) VALUES ('#{ params['maker'] }', '#{ params['name'] }', '#{ params['type'] }', '#{ params['sound'] }', '#{ params['size'] }')")
  redirect to('/cymbals') # back to index page
end

# show
get '/cymbals/:id' do
  @cymbal = query_db("SELECT * FROM cymbals WHERE id = #{ params[:id] }").first
  erb :cymbals_show
end






def query_db sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  puts sql_statement
  results = db.execute sql_statement
  db.close
  results
end
