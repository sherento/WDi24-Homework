# == Schema Information
#
# Table name: mountains
#
#  id          :integer          primary key
#  name        :text
#  image       :text
#  base_height :integer
#  sea_height  :integer
#  location    :text
#  fact        :text
#

class Mountain < ActiveRecord::Base
end
