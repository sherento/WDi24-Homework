require 'pry'
require 'sinatra'
require 'sinatra/reloader'


get '/' do
  erb :test
end

get '/write' do
  erb :write
end

get '/pass' do
  erb :pass
end

get '/morecode' do
  erb :morecode
end

get '/needref' do
  erb :needref
end

get '/feature' do
  erb :feature
end

get '/refactor' do
  erb :refactor
end
