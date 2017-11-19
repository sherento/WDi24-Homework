
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'



get '/' do
  erb :home
end

get '/countries' do
  @countries = query_db 'SELECT * FROM countries'
  erb :index
end

get '/countries/add' do
  erb :add
end

post '/countries' do
  query_db "INSERT INTO countries (country, city, image)
  VALUES ('#{params[:country]}', '#{params[:city]}', '#{params[:image]}')"
  redirect to('/countries')
end

get 'countries/:id' do
  @countries = query_db('SELECT * FROM countries WHERE id = ' + params[:id]).first
  erb :individual
end

get '/countries/:id/edit' do
  @countries = query_db('SELECT * FROM countries WHERE id = ' + params[:id]).first
  erb :edit
end

post 'countries/:id' do
  update = "UPDATE countries SET country='#{params[:country]}',
  city='#{params[:city]}', image'#{parmas[:image]}' WHERE id = #{params[:id]}"
  query_db update
  redirect to("/countries/#{params[:id]}")
end

get '/countries/:id/delete' do
  query_db 'DELETE FROM countries WHERE id = ' + params[:id].to_i
  redirect to('/countries')
end

def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  puts sql_statement

  results = db.execute sql_statement
  db.close
  results
end
