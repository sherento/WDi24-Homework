namespace :twitter do

  desc "Remove all Users and Tweets from database"
  task :clear => :environment do
    User.destroy_all
    Tweet.destroy_all
    Rake::Task['twitter:stats'].invoke
  end

  task :stats => :environment do
    puts "Users: #{User.count}, Tweets: #{Tweet.count}"
  end

  desc "Populates the Tweet and User tables with Faker data"
  task :populate, [:user_count] => :environment do |t, args|
    FactoryGirl.create_list :user_with_tweets, args[:user_count].to_i
    Rake::Task['twitter:stats'].invoke
  end

  desc "Populates the Tweet table with real data from Twitter"
  task :search, [:query, :count] => :environment do |t, args|
    num = args[:count].to_i
    puts "Searching twitter for #{args[:count]} tweets mentioning #{args[:query]}"

    puts "#{args[:query]}"
    puts "#{args[:count]}"
    #Code here
    #Ignore users, just get the tweet
    @tweets = $twitter.search("#[#{args[:query]}]", :result_type => "recent").take(num).collect do |tweet|

      # puts tweet.text
      Tweet.create :content => tweet.text

      # this will create the tweet but will also create the association through the user ID.
      # user.tweet.create :content => tweet.text


  #     @created_at = tweet.created_at.beginning_of_minute()
  #     @text = tweet.text
  #     @screen_name = tweet.user.screen_name
  #     @profile_image_url = tweet.user.profile_background_image_url
  #     @lat = tweet.geo.coordinates[0]
  #     @lng = tweet.geo.coordinates[1]

      Rake::Task['twitter:stats'].invoke
    end
  end
end
