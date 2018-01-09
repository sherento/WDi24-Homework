
#
# $twitter = Twitter::REST::Client.new do |config|
#   config.consumer_key = ENV['TWITTER_CONSUMER_KEY']
#   config.consumer_secret = ENV['TWITTER_SECRET_KEY']
#   config.access_token = ENV['TWITTER_ACCESS_TOKEN']
#   config.access_token_secret = ENV['TWITTER_SECRET_TOKEN']
# end

$twitter = Twitter::REST::Client.new do |config|
  config.consumer_key = ENV['TWITTER_CONSUMER_KEY']
  config.consumer_secret = ENV['TWITTER_SECRET_KEY']
  config.access_token = ENV['TWITTER_ACCESS_TOKEN']
  config.access_token_secret = ENV['TWITTER_SECRET_TOKEN']
end
