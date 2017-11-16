require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
  erb :home
end

get '/book' do
  redirect to('/') if params[:title].empty?

  @title = params[:title]
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"
  info = HTTParty.get(url)

  @found_title = info['items'].first['volumeInfo']['title']
  @authors = info['items'].first['volumeInfo']['authors']
  @description = info['items'].first['volumeInfo']['description']
  @image = info['items'].first['volumeInfo']['imageLinks']['smallThumbnail']

  erb :book
end

get '/about' do
  erb :about
end
