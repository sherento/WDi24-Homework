class AddArtistIdToWorks < ActiveRecord::Migration[5.1]
  def change
    add_column :works, :artist_id, :integer
  end
end
