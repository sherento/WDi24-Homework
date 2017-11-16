require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
  erb :form
end

get '/result' do
  @title = params[:title]
  @url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"

  @info = HTTParty.get(@url)
  @title = @info["items"][0]["volumeInfo"]["title"]
  @author = @info["items"][0]["volumeInfo"]["authors"]
  @cover = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @desc = @info["items"][0]["volumeInfo"]["description"]

  erb :result
end
