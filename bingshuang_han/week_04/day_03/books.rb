require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do

  erb:home
end

get '/search' do
  # binding.pry
  @title =params[:title]   #Ulysses dhl javascript
  @url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"
  @massivetext = HTTParty.get @url
  @authors = @massivetext['items'][0]['volumeInfo']['authors'][0]
  @publishedDate = @massivetext["items"][0]['volumeInfo']["publishedDate"]
  @description = @massivetext["items"][0]['volumeInfo']["description"]
  @img = @massivetext["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @price = @massivetext["items"][0]['saleInfo']['listPrice']['amount']
  @currencyCode = @massivetext['items'][0]['saleInfo']['listPrice']['currencyCode']
  @averageRating =  @massivetext["items"][0]['volumeInfo']['averageRating']
  @publisher = @massivetext["items"][0]['volumeInfo']['publisher']
  @categories = @massivetext["items"][0]['volumeInfo']['categories'][0]
  @language = @massivetext["items"][0]['volumeInfo']['language']
  @indeandustryIdentifiers = @massivetext['items'][0]['volumeInfo']['industryIdentifiers'][0]['identifier']


  erb:search

end
