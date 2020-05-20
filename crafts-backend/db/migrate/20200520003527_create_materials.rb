class CreateMaterials < ActiveRecord::Migration[6.0]
  def change
    create_table :materials do |t|
      t.string :name
      t.integer :craft_id
      t.string :description

      t.timestamps
    end
  end
end
