require "sinatra"
require "sinatra/reloader"
require "pry"

get "/" do
  erb :home
end

get "/forms" do
  
  erb :forms
end
