require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'HTTParty'

get '/' do
  erb :home
end

get '/bookinfo' do
  redirect to ('/') if params[:book_title].empty?

  @book_title = params[:book_title].upcase

  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book_title }"
  @info = HTTParty.get(url);

  @book_info = @info['items'].first['volumeInfo']['imageLinks']['thumbnail']
  @book_long_title = @info['items'].first['volumeInfo']['title']
  # @book_published = @info['items'].first['volumeInfo']['publishedDate']
  @book_page_count = @info['items'].first['volumeInfo']['pageCount']
  @book_description = @info['items'].first['volumeInfo']['description']
  @book_price = @info['items'].first['saleInfo']['retailPrice']['amount']
  @book_rating = @info['items'].first['volumeInfo']['averageRating']
  @book_mature_rating = @info['items'].first['volumeInfo']['maturityRating']


  # @book_info = @info
  # gives me a full list of keys available

  erb :bookinfo
end



# => "https://www.googleapis.com/books/v1/volumes?q=title:Ulysses"
# [4] pry(main)> info = HTTParty.get(url);
# [5] pry(main)> info['items'].first['volumeInfo'].keys
# info['items'].first['volumeInfo'][‘description’]
