class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.string :Title
      t.text :Excerpt
      t.text :Description
      t.integer :Upvotes

      t.timestamps
    end
  end
end
