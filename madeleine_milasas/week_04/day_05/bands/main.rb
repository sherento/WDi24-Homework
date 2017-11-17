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
end

class Song < ActiveRecord::Base
  belongs_to :band
end


get '/' do
  erb :home
end
