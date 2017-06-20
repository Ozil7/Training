class CreateEmployees < ActiveRecord::Migration[5.1]
  def change
    create_table :employees do |t|
    	t.string :name
      t.integer :age
      t.string :designation
      t.string :project
      t.string :lead


      t.timestamps
    end
  end
end
