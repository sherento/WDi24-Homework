# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Country.destroy_all
Country.create(:name => "Australia", :population => 200)
Country.create(:name => "England", :population => 200)

City.destroy_all
City.create(:name => "London", :population => 250)
City.create(:name => "Sydney", :population => 220)
