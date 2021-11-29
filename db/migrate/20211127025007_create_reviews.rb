class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :body, null: false
      t.string :species, null: false

      t.belongs_to :user
      t.timestamps
    end
  end
end
