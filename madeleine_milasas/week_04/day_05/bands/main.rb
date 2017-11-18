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

  # def initialize
  #   @name = :name
  # end

  def to_param  # to generate pretty urls
    "#{ id }-#{ self.name }"
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

# show - single band
get '/bands/:url_name' do
  @band = Band.find params['url_name'].to_i
  erb :bands_show
end


after do
  ActiveRecord::Base.connection.close
end
