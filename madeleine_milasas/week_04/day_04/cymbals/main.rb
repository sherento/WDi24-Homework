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
