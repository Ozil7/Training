class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
    	t.string :name
    	t.string :release_date
    	t.string :runtime
    	t.text :overview
    	t.float :user_ratings, :array => true
    	t.float :avg_userScore
    	t.text :reviews, :array => true, :default => '{}'
      t.timestamps
    end
  end
end
