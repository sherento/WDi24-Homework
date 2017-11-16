require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'

get '/' do
  erb :home
end

# index: list all films
get '/films' do
  @films = query_db 'SELECT * FROM films'

  erb :films_index
end

# new: presents a form to add a new film to the db
get '/films/new' do
  erb :films_new
end

# create: adds a new film to the db, this is a post request
post '/films' do
  query_db "INSERT INTO films (title, year, director, genre, image) VALUES ('#{params['title']}', '#{params['year']}', '#{params['director']}', '#{params['genre']}', '#{params['image']}')"
  redirect to('/films')
end

# show information for a single film
get '/films/:id' do
  @film = query_db('SELECT * FROM films WHERE id = ' + params[:id]).first
  #sqlite3 gem always returns an array so we can pluck a single film from in there
  erb :films_show
end

# edit
get '/films/:id/edit' do
  @film = query_db('SELECT * FROM films WHERE id = ' + params[:id]).first
  erb :films_edit
end

# update existing film with edited info
post '/films/:id' do
  update = "UPDATE films SET title='#{params[:title]}', year='#{params[:year]}', director='#{params[:director]}', genre='#{params[:genre]}', image='#{params[:image]}' WHERE id = #{params[:id]}"
  query_db update
  redirect to("/films/#{params[:id]}")
end

# destroy
get '/films/:id/delete' do
  query_db 'DELETE FROM films WHERE id = ' + params[:id]
  redirect to('/films')
end

# open and close the db connection
def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  puts sql_statement # optional but nice for debugging

  results = db.execute sql_statement
  db.close
  results # implicit return

end
