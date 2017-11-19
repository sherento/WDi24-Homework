require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
  erb :home
end

get '/bookinfo' do
  redirect to('/') if params[:book_title].empty?

  @book_title = params[:book_title]

  @book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@book_title}"

  info = HTTParty.get(@book_url)

  @book_image = info['items'].first['volumeInfo']['imageLinks']['smallThumbnail']

  @book_description = info['items'].first['volumeInfo']['description']

  erb :bookinfo
end
