class Pokemon < ActiveRecord::Migration[6.1]
  def change
    create_table :pokemons do |t|
      t.string :name, null: false, default: ""

      t.belongs_to :user
    end
  end
end