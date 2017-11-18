require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# to see SQL in CLI
ActiveRecord::Base.logger = Logger.new(STDERR)

class Band < ActiveRecord::Base
  validates :name, presence: true  # validation, should fail/return false on .save or error on .save! if no name
  has_many :songs, dependent: :destroy

  # attr_accessor :name

  def slug
    self.name.downcase.gsub ' ', '-'
  end

  def to_param  # to generate pretty urls
    "#{ id }-#{ slug }"
  end

end


class Song < ActiveRecord::Base
  validates :name, presence: true
  belongs_to :band
end


get '/' do
  erb :home
end

# index - show all bands
get '/bands' do
  @bands = Band.all
  erb :bands_index
end

# new - present form
get '/bands/new' do
  erb :bands_new
end

# new - post
post '/bands' do
  band = Band.create name: params[:name], country: params[:country], year: params[:year].to_i, image: params[:image]
  redirect to("/bands/#{ band.id }")
end

# edit - present form
get '/bands/:url_name/edit' do
  @band = Band.find params['url_name'].to_i
  erb :bands_edit
end

# edit - post
post '/bands/:url_name' do
  band = Band.find params[:url_name].to_i
  band.update :name => params[:name], :country => params[:country], :year => params[:year].to_i, :members => params[:members], :image => params[:image]
  redirect to("/bands/#{ params[:url_name] }")
end

# delete
get '/bands/:url_name/delete' do
  band = Band.find params[:url_name]
  band.delete ## destroy didn't work, maybe will once there are songs?
  redirect to('/bands')
end

# show - single band
get '/bands/:url_name' do
  @band = Band.find params['url_name'].to_i
  erb :bands_show
end


after do
  ActiveRecord::Base.connection.close
end
